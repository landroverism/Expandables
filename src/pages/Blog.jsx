import Footer from '../components/Footer';

export default function Blog() {
  return (
    <main data-transition-page="blog" data-transition="container" className="main">
      <section className="section section-space is-visible">
        <div className="container">
          <div className="v-flex-center-top gap-40">
            <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch' }}>
              <div className="rich-inherit w-richtext">
                <h3>Blog</h3>
              </div>
            </div>
            <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '30ch' }}>
              <div className="rich-inherit w-richtext">
                <h3>Latest Updates</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
