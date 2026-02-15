import PartyBackground from './PartyBackground';

export default function HeroSection() {
  return (
    <section changeNavColor="white" className="section">
      <div className="container">
        <div className="hero">
          <div></div>
          <div className="future_grid">
            <div className="future_split">
              <div className="relative">
                <div className="f-16 caps lh-110">POP-UP NIGHTCLUBS</div>
              </div>
            </div>
            <div className="v-flex-center-center">
              <div
                data-texture="https://cdn.prod.website-files.com/68532a35829494931a29b25b/68623d650511e257010ad56b_TextureStart.png"
                className="hero_logo"
              >
                <img src="/new-logo.png" alt="The Expandables" className="site-logo" />
                <div className="logo-pieces"></div>
              </div>
            </div>
            <div className="future_split is-right">
              <div className="relative">
                <div className="f-16 caps lh-110">FOR ALL OCCASIONS</div>
              </div>
            </div>
          </div>
          <div className="v-flex-center-top">
            <div className="custom-descr text-center f-16 caps lh-90" style={{ '--max-w': '34ch', '--sm-fixed-w': '34ch' }}>
              <div className="rich-inherit w-richtext">
                <h1>No Bouncers. No Queues. No Idiots. We bring the nightclub to you.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_bg">
        <PartyBackground />
      </div>
    </section>
  );
}
