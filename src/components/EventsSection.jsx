const logos = [
  { src: '/logos/sony.svg', alt: 'Sony' },
  { src: '/logos/jbl.svg', alt: 'JBL' },
  { src: '/logos/yamaha.svg', alt: 'Yamaha' },
  { src: '/logos/kenwood.svg', alt: 'Kenwood' },
  { src: '/logos/pioneer.svg', alt: 'Pioneer' },
  { src: '/logos/qsc.svg', alt: 'QSC' },
  { src: '/logos/shure.svg', alt: 'Shure' },
  { src: '/logos/sennheiser.svg', alt: 'Sennheiser' },
  { src: '/logos/bose.svg', alt: 'Bose' },
  { src: '/logos/allen-heath.svg', alt: 'Allen & Heath' },
];

function LogoRow({ items, loading = 'lazy', className = '' }) {
  return (
    <div wrapper="" className={`team_wrapper w-dyn-list ${className}`}>
      <div role="list" className="team_list w-dyn-items">
        {items.map((logo, i) => (
          <div role="listitem" className="team_item w-dyn-item" key={i}>
            <img
              src={logo.src}
              loading={loading}
              alt={logo.alt || ''}
              className={`img-contain${className.includes('is-bot') ? '' : ' is-logo'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="section section-space">
      <div className="container">
        <div className="team">
          <div className="team_top">
            <div className="v-flex-center-top gap-40 sm-gap-30">
              <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }} data-module="TextAnimation">
                <div className="rich-inherit w-richtext">
                  <h3>Our Events</h3>
                </div>
              </div>
              <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '29ch', '--sm-max-w': '29ch' }} data-module="TextAnimation">
                <div className="rich-inherit w-richtext">
                  <h3>Pop-Up Nightclubs for Every Occasion</h3>
                </div>
              </div>
            </div>
            <div className="custom-descr text-center f-15 lh-120 -ls-01 font-body" style={{ '--max-w': '34ch', '--sm-max-w': '34ch' }} data-module="TextAnimation">
              <div className="rich-inherit w-richtext">
                <p>Powered by world-class PA systems from the brands that define professional sound.</p>
              </div>
            </div>
          </div>
          <div data-module="Marque" className="team_marque">
            <LogoRow items={logos} loading="lazy" />
            <LogoRow items={logos} loading="eager" />
            <LogoRow items={logos} loading="lazy" />
            <LogoRow items={logos} loading="lazy" />
          </div>
          <div className="team_bottom">
            <div className="custom-descr text-center f-14 font-mono lh-120 caps" style={{ '--max-w': '50ch' }} data-module="TextAnimation">
              <div className="rich-inherit w-richtext">
                <p>Trusted across Sweden</p>
              </div>
            </div>
            <LogoRow items={logos.slice(0, 4)} className="is-bot" />
          </div>
        </div>
      </div>
    </section>
  );
}
