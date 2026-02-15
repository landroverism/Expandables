import { Link } from 'react-router-dom';

export default function BurgerMenu({ isOpen, onClose }) {
  const handleLinkClick = (e, href) => {
    if (href && href.startsWith('#')) {
      const id = href.slice(1);
      const target = id ? document.getElementById(id) : null;
      onClose();
      if (target) {
        e.preventDefault();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (window.history.replaceState) {
            window.history.replaceState(null, '', href);
          }
        }, 100);
      }
    } else {
      onClose();
    }
  };

  return (
    <div className={`burger${isOpen ? ' burger-open' : ''}`}>
      <div className="container">
        <div className="burger_body">
          <div className="burger_top grow">
            <Link to="/" aria-current="page" className="burger_logo w-inline-block w--current" onClick={onClose}>
              <div className="logo-small">
                <img src="/new-logo.png" alt="The Expandables" className="site-logo" />
              </div>
            </Link>
          </div>
          <div className="burger_list grow">
            <a href="#contact" className="burger_item w-inline-block" onClick={(e) => handleLinkClick(e, '#contact')}>
              <div className="f-40 caps -ls-06">Contact Us</div>
            </a>
            <a href="#services" className="burger_item w-inline-block" onClick={(e) => handleLinkClick(e, '#services')}>
              <div className="f-40 caps -ls-06">Services</div>
            </a>
            <a href="#book" className="burger_item w-inline-block" onClick={(e) => handleLinkClick(e, '#book')}>
              <div className="f-40 caps -ls-06">Book Us</div>
            </a>
            <a href="#faq" className="burger_item w-inline-block" onClick={(e) => handleLinkClick(e, '#faq')}>
              <div className="f-40 caps -ls-06">FAQs</div>
            </a>
          </div>
          <div className="burger_bottom grow">
            <div className="h-flex-left-bottom sm-hide">
              <div className="f-11 lh-110 caps font-mono">Pop-up nightclubs</div>
            </div>
            <div id="w-node-f097604a-6456-bffe-8cd4-420bd162c6a1-d162c691" className="burger_bottom-mid">
              <div className="dot"></div>
              <div className="v-flex-center-center">
                <a href="https://www.instagram.com/theexpandables.se" target="_blank" rel="noopener noreferrer" className="text-link w-inline-block">
                  <div className="caps lh-110 font-mono f-14">Instagram</div>
                </a>
                <a href="https://www.tiktok.com/@theexpandables.se" target="_blank" rel="noopener noreferrer" className="text-link w-inline-block">
                  <div className="caps lh-110 font-mono f-14">TikTok</div>
                </a>
              </div>
              <div className="dot"></div>
            </div>
            <div className="h-flex-right-bottom sm-hide">
              <div className="f-11 lh-110 caps font-mono">All rights reserved <span data-year="">2026</span>&copy;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
