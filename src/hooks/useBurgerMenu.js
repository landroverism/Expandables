import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to manage burger menu state
 * Replicates the original burger menu toggle behavior
 */
export function useBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Toggle body class and handle escape key
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('burger-open');
    } else {
      document.body.classList.remove('burger-open');
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) close();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('burger-open');
    };
  }, [isOpen, close]);

  return { isOpen, toggle, close };
}
