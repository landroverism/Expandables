import { useEffect, useRef } from 'react';

const packages = [
  {
    tag: 'POPULAR',
    title: 'The Birthday Bash',
    description: 'Everything you need for an unforgettable birthday. Full club setup, sound, and lighting.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&fit=crop',
    link: 'mailto:booking@theexpandables.se?subject=Birthday%20Bash%20Booking',
  },
  {
    tag: 'BUSINESS',
    title: 'Corporate Kick-off',
    description: 'Impress your team with a private venue. Perfect for speeches followed by a private club.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop',
    link: 'mailto:booking@theexpandables.se?subject=Corporate%20Kickoff%20Booking',
  },
  {
    tag: 'SPECIAL',
    title: 'Wedding After Party',
    description: 'Keep the vibe going after the reception. A specialized space for the dancers.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop',
    link: 'mailto:booking@theexpandables.se?subject=Wedding%20After%20Party%20Booking',
  },
];

export default function PackageCardsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pkg-card--visible');
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-space pkg-cards-section">
      <div className="container">
        {/* Header */}
        <div className="v-flex-center-top gap-40 sm-gap-30" style={{ marginBottom: 'var(--size--80, 5rem)' }}>
          <div
            className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono"
            style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }}
            data-module="TextAnimation"
          >
            <div className="rich-inherit w-richtext">
              <h3>Our Packages</h3>
            </div>
          </div>
          <div
            className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20"
            style={{ '--max-w': '30ch', '--sm-max-w': '30ch' }}
            data-module="TextAnimation"
          >
            <div className="rich-inherit w-richtext">
              <h3>Choose the perfect package for your event</h3>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="pkg-cards-grid">
          {packages.map((pkg, i) => (
            <div
              className="pkg-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ '--card-delay': `${i * 0.15}s` }}
            >
              {/* Tag badge */}
              <div className="pkg-card__tag">
                <span className="f-11 font-mono caps lh-110">{pkg.tag}</span>
              </div>

              {/* Image */}
              <div className="pkg-card__image">
                <img src={pkg.image} alt={pkg.title} loading="lazy" />
                <div className="pkg-card__image-overlay" />
              </div>

              {/* Content */}
              <div className="pkg-card__content">
                <div className="pkg-card__title f-14 font-mono caps lh-110">{pkg.title}</div>
                <p className="pkg-card__desc f-15 font-body lh-120 -ls-01">{pkg.description}</p>
                <a href={pkg.link} className="pkg-card__btn">
                  <span className="f-11 font-mono caps lh-110">Book Now</span>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1L12.5 5M12.5 5L8.5 9M12.5 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
