import GlowText from './GlowText';

const faqs = [
  { q: 'How much space do I need?', a: "Our pop-up club fits in most venues. We need roughly 20–40 m² for the dance floor and gear. We'll confirm exact dimensions when you get in touch." },
  { q: 'What about power?', a: "We need standard mains power (230V). We'll outline exact requirements when we plan your event.", align: 'is-left' },
  { q: 'How loud is the system?', a: 'Loud enough for a real club feel, but we can tailor levels to your venue and neighbours.' },
  { q: 'Can I bring my own DJ?', a: 'Yes. Our setup works with any DJ. We can also recommend or provide a DJ if you\'d like.', align: 'is-left' },
  { q: 'Is setup included?', a: 'Yes. We deliver, set up, run the night, and pack down. You just show up and enjoy.' },
  { q: 'What is the Expandables club?', a: "We're a pop-up nightclub service: full sound, lights, and vibe in your space. No bouncers, no queues—just a real club experience for your event.", align: 'is-left' },
  { q: 'Can the club be used in all weather?', a: 'Our gear is built for indoor use. For outdoor events we can discuss tents or covered spaces.' },
];

export default function FAQSection() {
  return (
    <section id="faq" changeNavColor="white" className="section section-space">
      <div className="container">
        <div className="v-flex-center-top gap-40 sm-gap-20">
          <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }}>
            <div className="rich-inherit w-richtext">
              <GlowText text="FAQs" as="h3" />
            </div>
          </div>
          <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '28ch' }}>
            <div className="rich-inherit w-richtext">
              <GlowText text="Frequently Asked" as="h3" />
            </div>
          </div>
        </div>
        <div className="security_timeline" style={{ maxWidth: '42rem', margin: '3rem auto 0' }}>
          {faqs.map((faq, i) => (
            <div className="security_timeline-item" key={i}>
              <div className="security_line">
                <div className={`security_content${faq.align ? ` ${faq.align}` : ''}`}>
                  <GlowText text={faq.q} as="div" className="f-14 font-mono lh-110 caps" />
                  <div className="custom-descr font-body lh-120 -ls-01 f-15" style={{ '--max-w': '42ch' }}>
                    <div className="rich-inherit w-richtext">
                      <GlowText text={faq.a} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
