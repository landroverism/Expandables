import { useEffect } from 'react';

/**
 * IntersectionObserver hook that adds 'is-visible' class to .section elements
 * Replicates the original Ciridae scroll-in animation behavior
 */
export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('main .section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    // First section (hero) visible immediately
    if (sections[0]) sections[0].classList.add('is-visible');

    return () => observer.disconnect();
  }, []);
}
