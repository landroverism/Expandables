import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * GlowText – scroll-driven word-by-word text reveal.
 *
 * Words start dim (dark grey) and progressively "glow" to white
 * as the element scrolls through the viewport.
 *
 * Props:
 *   text     – the string to render
 *   as       – wrapper element type ('p', 'h3', 'div', 'span', etc.)  default 'p'
 *   className – optional extra classes on the wrapper
 *   style    – optional inline styles on the wrapper
 *   offset   – 0-1, how far into the viewport to start (default 0.85 = starts
 *              when element is 85% from the top, i.e. near the bottom)
 *   end      – 0-1, viewport position where all words should be lit (default 0.35)
 */
export default function GlowText({
  text,
  as: Tag = 'p',
  className = '',
  style = {},
  offset = 0.92,
  end = 0.3,
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const words = text.split(/\s+/).filter(Boolean);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      ticking.current = false;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Element's vertical center relative to viewport
      const center = rect.top + rect.height / 2;

      // Map: when center is at offset*vh → 0%, when center is at end*vh → 100%
      const range = (offset - end) * vh;
      const raw = ((offset * vh) - center) / range;
      setProgress(Math.max(0, Math.min(1, raw)));
    });
  }, [offset, end]);

  useEffect(() => {
    // Initial calc + listen
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // How many words should be fully lit
  const litCount = Math.round(progress * words.length);

  return (
    <Tag ref={ref} className={`glow-text ${className}`} style={style}>
      {words.map((word, i) => {
        // Words before litCount are fully bright
        // The word at litCount is transitioning
        // Words after litCount are dim
        let wordProgress;
        if (i < litCount) {
          wordProgress = 1;
        } else if (i === litCount) {
          // Fractional glow for the "current" word
          const frac = (progress * words.length) - litCount;
          wordProgress = frac;
        } else {
          wordProgress = 0;
        }

        return (
          <span
            key={i}
            className="glow-word"
            style={{ '--wp': wordProgress }}
          >
            {word}{' '}
          </span>
        );
      })}
    </Tag>
  );
}
