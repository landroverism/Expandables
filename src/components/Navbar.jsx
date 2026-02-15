import { Link } from 'react-router-dom';

export default function Navbar({ onBurgerClick }) {
  return (
    <nav className="nav">
      <div className="nav_body">
        <div className="h-flex-left-center">
          <a
            data-not-animate=""
            data-module="Button"
            data-trigger="true"
            data-wf--button--variant="base"
            href="#book"
            className="btn w-inline-block"
          >
            <div className="btn_text">
              <div className="f-14 font-mono caps lh-110">book now</div>
            </div>
          </a>
        </div>
        <Link
          id="w-node-_724c727c-8e5e-f92f-5647-0b6f17835073-1783506e"
          to="/"
          aria-current="page"
          className="nav_logo w-inline-block w--current"
        >
          <div className="logo-small">
            <img
              src="/new-logo.png"
              alt="The Expandables"
              className="site-logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </Link>
        <div className="h-flex-right-center">
          <div className="nav_burger" onClick={onBurgerClick}>
            <div className="btn_text sm-hide">
              <div className="f-14 font-mono caps lh-110">Menu</div>
              <div className="btn_text-close f-14 font-mono caps lh-110">close</div>
            </div>
            <div className="nav_burger-lines">
              <div className="nav_burger-line"></div>
              <div className="nav_burger-line"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
