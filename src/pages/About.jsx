import Footer from '../components/Footer';

export default function About() {
  return (
    <main data-transition-page="about" data-transition="container" className="main">
      <section className="section section-space is-visible">
        <div className="container">
          <div className="v-flex-center-top gap-40">
            <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch' }}>
              <div className="rich-inherit w-richtext">
                <h3>About Us</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '30ch' }}>
              <div className="rich-inherit w-richtext">
                <h3>The Expandables — Pop-Up Nightclubs</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-15 lh-120 -ls-01 font-body" style={{ '--max-w': '50ch' }}>
              <div className="rich-inherit w-richtext">
                <p>We bring the nightclub to you. Professional sound, dynamic lighting, and top-tier atmosphere for any occasion. Based in Stockholm, Sweden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
