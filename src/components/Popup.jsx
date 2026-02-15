export default function Popup() {
  return (
    <div data-module="Popup" data-popup="join" className="popup">
      <div className="popup_close">
        <div className="f-14 font-mono caps lh-90">close</div>
        <div className="popup_close-icon">
          <div className="popup_close-lines"></div>
          <div className="popup_close-lines is-2"></div>
        </div>
      </div>
      <div className="popup_body">
        <div className="popup_logo">
          <div className="logo-small">
            <img src="/new-logo.png" alt="The Expandables" className="site-logo" />
          </div>
        </div>
        <div className="popup_content">
          <div className="v-flex-center-top gap-48 mb-40 sm-mb-24 sm-gap-16">
            <div className="custom-descr text-center f-16 caps lh-90 -ls-02" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }}>
              <div className="rich-inherit w-richtext">
                <p>Book your event</p>
              </div>
            </div>
          </div>
          <div className="custom-descr text-center f-32 caps lh-90 -ls-02 mb-72 sm-mb-40" style={{ '--max-w': '22ch', '--sm-fixed-w': '22ch' }}>
            <div className="rich-inherit w-richtext">
              <p>Ready to bring the nightclub to your next event? Get in touch.</p>
            </div>
          </div>
          <div className="popup_btn">
            <a data-not-animate="" data-module="Button" data-trigger="" data-wf--button--variant="base" href="mailto:booking@theexpandables.se" className="btn w-inline-block">
              <div className="btn_text">
                <div className="f-14 font-mono caps lh-110">booking@theexpandables.se</div>
              </div>
            </a>
          </div>
        </div>
        <div className="popup_bottom grow">
          <div className="h-flex-left-bottom">
            <div className="f-11 lh-110 caps font-mono">Pop-up nightclubs</div>
          </div>
          <div className="burger_bottom-mid is-popup">
            <div className="popup_bottom-info">
              <div className="custom-descr text-center font-mono caps lh-110 f-14" style={{ '--max-w': '31ch', '--sm-fixed-w': '31ch' }}>
                <div className="rich-inherit w-richtext">
                  <p>Stockholm, Sweden</p>
                </div>
              </div>
              <a href="tel:+46737047843" className="text-link w-inline-block">
                <div className="caps lh-110 font-mono f-14">+46 73 704 78 43</div>
              </a>
            </div>
            <div className="dot"></div>
            <div className="v-flex-center-center">
              <a href="https://www.instagram.com/theexpandables.se" className="text-link w-inline-block">
                <div className="caps lh-110 font-mono f-14">Instagram</div>
              </a>
              <a href="https://www.tiktok.com/@theexpandables.se" className="text-link w-inline-block">
                <div className="caps lh-110 font-mono f-14">TikTok</div>
              </a>
            </div>
            <div className="dot"></div>
          </div>
          <div className="h-flex-right-bottom">
            <div className="f-11 lh-110 caps font-mono">All rights reserved <span data-year="">2026</span>&copy;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
