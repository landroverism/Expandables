const QuoteIcon = () => (
  <div className="svg w-embed">
    <svg width="100%" height="100%" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9517 17.4319L10.6157 17.4319V8.40792C10.6157 3.99192 13.6877 1.62392 16.9517 0.919922V4.37592C15.2237 4.88792 13.7517 6.29592 13.7517 8.40792V10.4559L16.9517 10.4559L16.9517 17.4319ZM6.39166 17.4319H0.0556641L0.0556641 8.40792C0.0556641 3.99192 3.12766 1.62392 6.39166 0.919922L6.39166 4.37592C4.66366 4.88792 3.19166 6.29592 3.19166 8.40792V10.4559L6.39166 10.4559L6.39166 17.4319Z" fill="var(--color--orange)" />
    </svg>
  </div>
);

const testimonials = [
  {
    text: "The Expandables transformed our garden into an absolute nightclub. The sound, the lights, the vibe — our guests couldn't believe it. Best birthday party ever!",
    logo: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/68a5a8fc72c8f10e36959be9_BV%20TECH%201.png',
    name: 'Emma Lindqvist',
    role: 'BIRTHDAY CELEBRATION, STOCKHOLM',
  },
  {
    text: "We hired The Expandables for our company kick-off and it was the highlight of the year. Professional setup, incredible atmosphere, and our team is still talking about it months later.",
    logo: 'https://cdn.prod.website-files.com/6866c642756f5668ba983081/68a5a8f4b23a330adecbee74_factua%20logo%201.png',
    name: 'ANDERS ERIKSSON',
    role: 'CORPORATE EVENT, GOTHENBURG',
  },
];

const ArrowLeft = () => (
  <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99436 7.77137H5.71413L3.45127 5.43309C3.19482 5.16154 2.84784 4.85983 2.56122 4.58829C3.19482 4.60337 3.49653 4.60337 3.79824 4.60337H8.53516V3.39651H3.79824C3.49653 3.39651 3.2099 3.39651 2.56122 3.4116C2.84784 3.14006 3.19482 2.79309 3.46636 2.52154L5.71413 0.228516L3.99436 0.228516L0.464302 3.99994L3.99436 7.77137Z" fill="currentColor" />
  </svg>
);

const ArrowRight = () => (
  <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.00564 7.77137H3.28587L5.54873 5.43309C5.80518 5.16154 6.15216 4.85983 6.43878 4.58829C5.80518 4.60337 5.50347 4.60337 5.20176 4.60337H0.464844V3.39651H5.20176C5.50347 3.39651 5.7901 3.39651 6.43878 3.4116C6.15216 3.14006 5.80518 2.79309 5.53364 2.52154L3.28587 0.228516L5.00564 0.228516L8.5357 3.99994L5.00564 7.77137Z" fill="currentColor" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section data-module="TestimonialsSplide" className="section section-space">
      <div className="container">
        <div className="testimonials">
          <div className="v-flex-center-top gap-40 sm-gap-30">
            <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }} data-module="TextAnimation">
              <div className="rich-inherit w-richtext">
                <h3>Testimonials</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '24ch' }} data-module="TextAnimation">
              <div className="rich-inherit w-richtext">
                <h3>What our clients say</h3>
              </div>
            </div>
          </div>
          <div className="v-flex-stretch-top gap-24">
            <div className="splide">
              <div className="testimonials_wrapper w-dyn-list splide__track">
                <div carousel-wrapper="" role="list" className="testimonials_list w-dyn-items splide__list">
                  {testimonials.map((t, i) => (
                    <div role="listitem" className="testimonials_item-parent w-dyn-item splide__slide" key={i}>
                      <div className="testimonials_item">
                        <div className="v-flex-left-top gap-40">
                          <div className="testimonials_icon">
                            <QuoteIcon />
                          </div>
                          <div className="testimonials_text">
                            <p className="f-24 lh-110 font-body -ls-02">{t.text}</p>
                          </div>
                        </div>
                        <div className="h-flex-between-bottom sm-v-flex-right-top sm-gap-24">
                          <div className="testimonials_logo sm-order-last">
                            <img src={t.logo} loading="lazy" alt="" />
                          </div>
                          <div className="v-flex-right-top gap-16">
                            <div className="testimonials_name">
                              <div className="f-14 font-mono lh-100 caps">{t.name}</div>
                            </div>
                            <div className="h-flex-left-stretch">
                              <div className="f-14 font-mono lh-120 caps">{t.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-flex-between-center">
              <div className="testimonials_indexes f-11 font-mono">
                <div data-current="">1</div>
                <div>/</div>
                <div data-length="">{testimonials.length}</div>
              </div>
              <div className="testimonials_arrows">
                <div data-prev="" className="testimonials_arrow-parent">
                  <div className="testimonials_arrow">
                    <div className="svg w-embed"><ArrowLeft /></div>
                  </div>
                </div>
                <div data-next="" className="testimonials_arrow-parent">
                  <div className="testimonials_arrow">
                    <div className="svg w-embed"><ArrowRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
