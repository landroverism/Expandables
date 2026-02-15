import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import BurgerMenu from './components/BurgerMenu';
import Popup from './components/Popup';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';

import { useBurgerMenu } from './hooks/useBurgerMenu';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useContentReveal } from './hooks/useContentReveal';

export default function App() {
  const { isOpen, toggle, close } = useBurgerMenu();
  const location = useLocation();

  // Re-initialize scroll reveal on route change
  useScrollReveal();
  useContentReveal();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="global">
      {/* CSS utility divs preserved for Webflow compatibility */}
      <div className="css">
        <div className="css_main w-embed"></div>
        <div className="css_fonts w-embed"></div>
        <div className="css_sm-fonts w-embed"></div>
        <div className="css_els w-embed"></div>
        <div className="css_gaps w-embed"></div>
        <div className="css_sm-gaps w-embed"></div>
        <div className="css_margins w-embed"></div>
        <div className="css_sm-margins w-embed"></div>
        <div className="css_media w-embed"></div>
      </div>

      <Navbar onBurgerClick={toggle} />
      <BurgerMenu isOpen={isOpen} onClose={close} />
      <Popup />
      <div className="transition"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
    </div>
  );
}
