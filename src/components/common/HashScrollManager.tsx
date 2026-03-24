import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 108;

export default function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const targetId = decodeURIComponent(location.hash.replace('#', ''));
        const element = document.getElementById(targetId);

        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
          return;
        }
      }

      if (!location.hash && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return null;
}

