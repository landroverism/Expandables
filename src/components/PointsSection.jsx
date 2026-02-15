export default function PointsSection() {
  const steps = [
    {
      tag: '01 - CS',
      title: 'CONSULT',
      text: "Contact us with your date, location, and requirements. We'll verify availability and discuss your vision for the perfect event.",
      bgImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=75&fit=crop',
    },
    {
      tag: '02 - DS',
      title: 'DESIGN',
      text: "Choose your lighting vibe, music preference (DJ or Playlist), and any extras like fog or climate control. We customize every detail.",
      bgImage: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=900&q=75&fit=crop',
    },
    {
      tag: '03 - SP',
      title: 'SETUP & PARTY',
      text: "We arrive early to build the venue, rigging sound and lights. The club is yours — no queues, no closing time. We dismantle everything when the last guest calls it a night.",
      bgImage: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=75&fit=crop',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="points">
          <div className="points_sticky">
            <div className="points_bg-parent">
              <img src="https://cdn.prod.website-files.com/68532a35829494931a29b25b/68b0a06762f9bbbda09e68a5_Hero.webp" loading="lazy" alt="" className="img-cover" />
            </div>
            <div className="points_content">
              {steps.map((step, i) => (
                <div className="points_item" key={i}>
                  {/* Background image with dark blend overlay */}
                  <div className="points_item-bg">
                    <img src={step.bgImage} alt="" loading="lazy" />
                  </div>

                  <div className="v-flex-center-top gap-40" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="tag">
                      <div className="f-11 font-mono lh-110 caps">{step.tag}</div>
                    </div>
                    <div className="custom-descr caps f-20 lh-100 -ls-02" style={{ '--max-w': '50ch' }}>
                      <div className="rich-inherit w-richtext">
                        <h3>{step.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="points_logo" style={{ position: 'relative', zIndex: 2 }}>
                    <img src="/new-logo.png" alt="The Expandables" className="site-logo" />
                  </div>
                  <div className="points_bottom f-15 lh-120 -ls-01 font-body" style={{ position: 'relative', zIndex: 2 }}>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
