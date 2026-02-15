import LogoMaskSVG from './LogoMaskSVG';

export default function BuildsSection() {
  return (
    <section changeNavColor="white" className="section">
      <div className="container">
        <div className="builds">
          <LogoMaskSVG />
          <div className="builds_sticky">
            <div className="builds_content section-space">
              <div className="v-flex-center-top gap-40 relative z-2">
                <div className="custom-descr text-center f-16 caps lh-90 -ls-02" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }} data-module="TextAnimation">
                  <div className="rich-inherit w-richtext">
                    <h3>The Expandables</h3>
                  </div>
                </div>
                <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '76ch', '--sm-fixed-w': 'auto' }} data-module="TextAnimation">
                  <div className="rich-inherit w-richtext">
                    <p>We bring the nightclub to you. Professional sound, dynamic lighting, and top-tier atmosphere for any occasion.</p>
                  </div>
                </div>
              </div>
              <div className="builds_logo-parent">
                <div
                  data-texture2="https://cdn.prod.website-files.com/68532a35829494931a29b25b/68625e1f02cfa5297dbcc0b6_TextureStep1.png"
                  data-texture1="https://cdn.prod.website-files.com/68532a35829494931a29b25b/686261a52b8022845ef53da9_TextureStep5.png"
                  className="builds_logo"
                >
                  <img src="/new-logo.png" alt="The Expandables" className="site-logo" />
                  <div className="logo-pieces"></div>
                  <div className="builds_mask-parent">
                    <div className="builds_bg">
                      <img src="https://cdn.prod.website-files.com/68532a35829494931a29b25b/68b0a06762f9bbbda09e68a5_Hero.webp" loading="lazy" alt="" className="img-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="builds_canvas"><canvas className="canvas"></canvas></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
