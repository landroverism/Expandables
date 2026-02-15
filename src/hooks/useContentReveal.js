import { useEffect } from 'react';

/**
 * Reveals content after external Ciridae app loads, or falls back after timeout.
 * Replicates the original content visibility logic.
 */
export function useContentReveal() {
  useEffect(() => {
    const prodLink = 'https://ciridae.vercel.app/';

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'module';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    function loadStyles(href) {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      });
    }

    function loadProdResources() {
      Promise.all([
        loadStyles(`${prodLink}index.css`),
        loadScript(`${prodLink}app.js`),
      ])
        .then(() => {
          setTimeout(() => {
            const main = document.querySelector('main');
            if (main && getComputedStyle(main).visibility === 'hidden') {
              document.body.classList.add('content-visible');
            }
          }, 800);
        })
        .catch(() => {
          setTimeout(() => {
            document.body.classList.add('content-visible');
          }, 400);
        });
    }

    loadProdResources();

    // Fallback: reveal content after 2.5s if Ciridae app hasn't
    const fallbackTimer = setTimeout(() => {
      const main = document.querySelector('main');
      if (main && getComputedStyle(main).visibility === 'hidden') {
        document.body.classList.add('content-visible');
      }
    }, 2500);

    return () => clearTimeout(fallbackTimer);
  }, []);
}
