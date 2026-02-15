import { useState, useEffect, useRef } from 'react';

const packages = [
  {
    tag: 'Popular',
    title: 'The Birthday Bash',
    description: 'Everything you need for an unforgettable birthday. Full club setup, sound, and lighting to make your night legendary.',
    image: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f8084bfdc9ebc8f2229_blog-img-01.webp',
    imageSrcSet: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f8084bfdc9ebc8f2229_blog-img-01-p-500.webp 500w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f8084bfdc9ebc8f2229_blog-img-01-p-800.webp 800w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f8084bfdc9ebc8f2229_blog-img-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f8084bfdc9ebc8f2229_blog-img-01.webp 1350w',
    link: '/blog/introducing-the-ciridae',
  },
  {
    tag: 'Business',
    title: 'Corporate Kick-off',
    description: 'Impress your team with a private venue. Perfect for speeches followed by a private club experience.',
    image: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2.webp',
    imageSrcSet: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2-p-500.webp 500w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2-p-800.webp 800w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2-p-1080.webp 1080w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2-p-1600.webp 1600w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/68ae01ae54305ccfe795a24c_post-2-2.webp 2000w',
    link: '/blog/restoration-rebuttal-automation',
  },
  {
    tag: 'Special',
    title: 'Wedding After Party',
    description: 'Keep the vibe going after the reception. A specialized space for the dancers to celebrate all night.',
    image: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f898703c7accddb6814_blog-img-02.webp',
    imageSrcSet: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f898703c7accddb6814_blog-img-02-p-500.webp 500w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f898703c7accddb6814_blog-img-02-p-800.webp 800w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f898703c7accddb6814_blog-img-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/6866c642756f5668ba983081/689c4f898703c7accddb6814_blog-img-02.webp 1350w',
    link: '/blog/the-future-of-coding-is-orchestration',
  },
];

export default function PackagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  // Detect desktop (992px+) vs mobile
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 992);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Auto-cycle through packages every 3s when not hovering (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const startAutoCycle = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          setActiveIndex((prev) => (prev + 1) % packages.length);
        }
      }, 3000);
    };

    startAutoCycle();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isDesktop, isHovering]);

  // Hover handlers for desktop
  const handleMouseEnter = (index) => {
    if (!isDesktop) return;
    setIsHovering(true);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setIsHovering(false);
  };

  return (
    <section id="services" data-module="CaseStudies" className="section section-space">
      <div className="container">
        <div className="cases">
          {/* Header */}
          <div className="v-flex-center-top gap-40 sm-gap-30">
            <div
              className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono"
              style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }}
              data-module="TextAnimation"
            >
              <div className="rich-inherit w-richtext">
                <h3>Packages</h3>
              </div>
            </div>
            <div
              className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20"
              style={{ '--max-w': '24ch', '--sm-max-w': '24ch' }}
              data-module="TextAnimation"
            >
              <div className="rich-inherit w-richtext">
                <h3>Choose the perfect package for your event</h3>
              </div>
            </div>
          </div>

          {/* Accordion Cards */}
          <div className="cases_wrapper">
            <div className="w-dyn-list">
              <div role="list" className="cases_list w-dyn-items">
                {packages.map((pkg, i) => (
                  <div
                    role="listitem"
                    className={`cases_item w-dyn-item${activeIndex === i ? ' active' : ''}`}
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    style={
                      isDesktop
                        ? { '--flex-grow': activeIndex === i ? 1 : 0.3 }
                        : undefined
                    }
                  >
                    {/* Tag badge */}
                    <div className="cases_index">
                      <div className="tag">
                        <div className="f-11 font-mono lh-110 caps">{pkg.tag}</div>
                      </div>
                    </div>

                    {/* Title & description */}
                    <div className="cases_descr">
                      <div className="f-14 font-mono lh-110 caps">{pkg.title}</div>
                      <div className="cases_descr-text">
                        <p className="f-15 lh-110 font-body -ls-02">{pkg.description}</p>
                      </div>
                    </div>

                    {/* Image with "Read more" tag */}
                    <a href={pkg.link} className="cases_image w-inline-block">
                      <img
                        src={pkg.image}
                        loading="lazy"
                        alt={pkg.title}
                        sizes="100vw"
                        srcSet={pkg.imageSrcSet}
                        className="img-cover"
                      />
                      <div className="cases_image-tag">
                        <div className="f-11 font-mono caps">Read more</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="cases_line"></div>
          </div>

          {/* CTA button */}
          <div className="cases_btn">
            <a
              data-not-animate=""
              data-module="Button"
              data-trigger=""
              data-wf--button--variant="base"
              href="#book"
              className="btn w-inline-block"
            >
              <div className="btn_text">
                <div className="f-14 font-mono caps lh-110">book now</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
