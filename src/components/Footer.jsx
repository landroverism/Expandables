import PartyBackground from './PartyBackground';

export default function Footer() {
  return (
    <footer
      data-blur="https://cdn.prod.website-files.com/68532a35829494931a29b25b/685ab0939fab945df8ed201d_footer-texture.jpg"
      data-logo="https://cdn.prod.website-files.com/68532a35829494931a29b25b/685a91d22bf3d61069e8c5ee_logo-texture.png"
      data-module="Footer"
      className="footer_section"
    >
      <div className="footer_img">
        <PartyBackground />
      </div>
      <div className="footer_parent">
        <div className="footer">
          <div className="footer_mob-top">
            <div className="f-14 font-mono lh-110 caps">Stockholm, Sweden</div>
            <div className="f-14 font-mono lh-110 caps">EST. 2026</div>
          </div>
          <div className="footer_top">
            <div className="footer_logo">
              <img src="/new-logo.png" alt="The Expandables" className="site-logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
          <div className="v-flex-stretch-between grow">
            <div className="grid-3col sm-v-flex-center-between sm-h-full">
              <div className="v-flex-left-center sm-hide">
                <div className="f-14 font-mono lh-110 caps">Stockholm, Sweden</div>
              </div>
              <div id="w-node-a4b164e4-9e3e-b753-0380-ed81f74eeafa-f74eeaf4" className="v-flex-center-center gap-65">
                <a data-not-animate="" data-module="Button" data-trigger="waitlist" data-wf--button--variant="large" href="#book" className="btn w-variant-efb1a2c2-2474-dbe5-e12f-516eb34fc986 w-inline-block">
                  <div className="btn_text">
                    <div className="f-14 font-mono caps lh-110">Book your event now</div>
                  </div>
                </a>
              </div>
              <div className="v-flex-right-center sm-hide">
                <div className="f-14 font-mono lh-110 caps">EST. 2026</div>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="burger_bottom-mid is-footer">
                <div className="dot"></div>
                <div className="v-flex-center-center">
                  <a href="#contact" className="text-link w-inline-block">
                    <div className="caps lh-110 font-mono">contact us</div>
                  </a>
                  <a href="#services" className="text-link w-inline-block">
                    <div className="caps lh-110 font-mono">services</div>
                  </a>
                  <a href="#book" className="text-link w-inline-block">
                    <div className="caps lh-110 font-mono">book us</div>
                  </a>
                  <a href="#faq" className="text-link w-inline-block">
                    <div className="caps lh-110 font-mono">faqs</div>
                  </a>
                </div>
                <div className="dot"></div>
              </div>
              <div className="v-flex-center-top gap-4">
                <a href="/privacy-policy" className="text-link w-inline-block">
                  <div className="f-11 caps lh-100 font-mono">Privacy policy</div>
                </a>
                <a href="/terms-and-conditions" className="text-link w-inline-block">
                  <div className="f-11 caps lh-100 font-mono">Terms and conditions</div>
                </a>
                <div className="f-11 lh-100 caps font-mono">All rights reserved <span data-year="">2026</span>&copy;</div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_blur is-second"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
