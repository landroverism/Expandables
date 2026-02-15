const trailImages = Array.from({ length: 20 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return `https://cdn.prod.website-files.com/68532a35829494931a29b25b/689c4c32${['eddce2fea80be145','0b544cd66d3835a2','39e1b24d9c1bc073','adb86d662e7ee07b','e59289b18b4bf92a','f1bdafdb661083dd','fe9a543b8456890c','b1ea1baf7645ed5d','54d56e13f761d7b8','684754bf0392fdf7','efd6b86fbd1e8a48','f54a9fff41bd713a','e3238d007ce227b5','7c3b826708f73cba','c3c068515238ff22','d88c62041f952372','a1d0a3bf713236bd','fe9a543b84568936','9a236484989831a2','c2d209a23a96f16e'][i]}_trail-img-${num}.webp`;
});

export default function BookSection() {
  return (
    <section id="book" changeNavColor="white" data-module="ImageTrail ScrambleText Career" className="section">
      <div className="container">
        <div className="careers section-space">
          <div className="images_list">
            {trailImages.map((src, i) => (
              <div key={i} style={{ '--x': 0, '--y': 0 }} data-opacity="1" className="images_item">
                <img src={src} loading="lazy" alt="" className="img-cover" />
              </div>
            ))}
          </div>
          <div className="v-flex-center-top gap-40 sm-gap-30">
            <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }} data-module="TextAnimation">
              <div className="rich-inherit w-richtext">
                <h3>Book Now</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-62 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '28ch' }} data-module="TextAnimation">
              <div className="rich-inherit w-richtext">
                <h3>Ready to transform your next event into an unforgettable experience?</h3>
              </div>
            </div>
          </div>
          <div className="images">
            <div className="images_texts">
              <div className="images_text is-2">
                <div className="f-14 v-text font-mono lh-110 caps">No bouncers</div>
                <div className="f-14 v-text font-mono lh-110 caps">No queues</div>
              </div>
              <div className="images_text is-4">
                <div className="f-14 v-text font-mono lh-110 caps">No idiots</div>
                <div className="f-14 v-text font-mono lh-110 caps">Your own club</div>
              </div>
              <div className="images_text is-5">
                <div className="f-14 v-text font-mono lh-110 caps">Book today</div>
                <div className="f-14 v-text font-mono lh-110 caps">Party tonight</div>
              </div>
            </div>
            <div className="images_texts is-second">
              <div className="images_text is-2">
                <div className="f-14 v-text font-mono lh-110 caps">No bouncers</div>
                <div className="f-14 v-text font-mono lh-110 caps">No queues</div>
              </div>
              <div className="images_text is-4">
                <div className="f-14 v-text font-mono lh-110 caps">No idiots</div>
                <div className="f-14 v-text font-mono lh-110 caps">Your own club</div>
              </div>
              <div className="images_text is-5">
                <div className="f-14 v-text font-mono lh-110 caps">Book today</div>
                <div className="f-14 v-text font-mono lh-110 caps">Party tonight</div>
              </div>
            </div>
          </div>
          <div className="v-flex-center-center">
            <a data-not-animate="" data-module="Button" data-trigger="" data-wf--button--variant="base" href="mailto:booking@theexpandables.se" className="btn w-inline-block">
              <div className="btn_text">
                <div className="f-14 font-mono caps lh-110">book your event</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Career popup (hidden by default, toggled by Ciridae app) */}
      <div className="career_popup">
        <div className="popup_close">
          <div className="f-14 font-mono caps lh-90">close</div>
          <div className="popup_close-icon">
            <div className="popup_close-lines"></div>
            <div className="popup_close-lines is-2"></div>
          </div>
        </div>
        <div className="career_popup-content">
          <div className="career_popup-logo">
            <div className="popup_logo">
              <div className="logo-small">
                <img src="/new-logo.png" alt="The Expandables" className="site-logo" />
              </div>
            </div>
          </div>
          <div className="career_popup-center">
            <div className="v-flex-center-top gap-48 mb-40 sm-mb-24 sm-gap-16">
              <div className="custom-descr text-center f-16 caps lh-90 -ls-02" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }}>
                <div className="rich-inherit w-richtext">
                  <p>Get in touch</p>
                </div>
              </div>
            </div>
            <div className="custom-descr text-center f-32 caps lh-90 -ls-02 mb-72 sm-mb-40" style={{ '--max-w': '30ch' }}>
              <div className="rich-inherit w-richtext">
                <p>We&apos;re always looking to collaborate with exceptional talent.</p>
              </div>
            </div>
            <div className="popup_btn mb-80 sm-mb-48">
              <a data-not-animate="true" data-module="Button" data-trigger="" data-wf--button--variant="base" href="mailto:booking@theexpandables.se" className="btn w-inline-block">
                <div className="btn_text">
                  <div className="f-14 font-mono caps lh-110">booking@theexpandables.se</div>
                </div>
              </a>
            </div>
            <div className="custom-descr text-center f-32 caps lh-90 -ls-02" style={{ '--max-w': '30ch' }}>
              <div className="rich-inherit w-richtext">
                <p>We&apos;re assembling a team of curious minds and bold creators.</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
