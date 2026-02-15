import GlowText from './GlowText';

const items = [
  {
    tag: '01 - SS',
    title: 'Sound System',
    text: '2x 15" Active Speakers (1000W) + 1x 15" Active Subwoofer (400W). Earth-shaking bass guaranteed.',
    align: '',
  },
  {
    tag: '02 - LA',
    title: 'Lighting Array',
    text: '2x Cluster Derby Lights with Strobe, ADJ TRIPAR, 2x Equinox Power Batten MkII, Chauvet DJ GigBAR 2.0 System.',
    align: 'is-left',
    maxW: '30ch',
  },
  {
    tag: '03 - AT',
    title: 'Atmosphere & Climate',
    text: 'Eliminator VF1100 Fog Machine + 3.5kW Air Conditioning Unit. Perfect moody atmosphere, even in summer.',
    align: '',
    maxW: '28ch',
  },
];

export default function EquipmentSection() {
  return (
    <section id="equipment" data-module="Security" className="section section-space">
      <div className="container">
        <div className="security">
          <div className="v-flex-center-top gap-40 sm-gap-20">
            <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }}>
              <div className="rich-inherit w-richtext">
                <GlowText text="Equipment" as="h3" />
              </div>
            </div>
            <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '20ch' }}>
              <div className="rich-inherit w-richtext">
                <GlowText text="Pro Gear Included" as="h3" />
              </div>
            </div>
          </div>
          <div className="security_timeline">
            {items.map((item, i) => (
              <div className="security_timeline-item" key={i}>
                <div className="security_tag">
                  <GlowText text={item.tag} as="div" className="f-14 font-mono lh-100 caps" />
                </div>
                <div className="security_line">
                  <div className={`security_content${item.align ? ` ${item.align}` : ''}`}>
                    <GlowText text={item.title} as="div" className="f-14 font-mono lh-110 caps" />
                    <div className="custom-descr font-body lh-120 -ls-01 f-15" style={{ '--max-w': item.maxW || '32ch' }}>
                      <div className="rich-inherit w-richtext">
                        <GlowText text={item.text} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
