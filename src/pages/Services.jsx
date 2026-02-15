import Footer from '../components/Footer';

export default function Services() {
  return (
    <main data-transition-page="services" data-transition="container" className="main">
      <section className="section section-space is-visible">
        <div className="container">
          <div className="v-flex-center-top gap-40">
            <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch' }}>
              <div className="rich-inherit w-richtext">
                <h3>Our Services</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '30ch' }}>
              <div className="rich-inherit w-richtext">
                <h3>What We Offer</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-15 lh-120 -ls-01 font-body" style={{ '--max-w': '50ch' }}>
              <div className="rich-inherit w-richtext">
                <p>From birthday bashes to corporate events and wedding after-parties, we deliver a complete nightclub experience wherever you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
