import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission logic
    const mailto = `mailto:booking@theexpandables.se?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" changeNavColor="white" className="section section-space">
      <div className="container">
        <div className="v-flex-center-top gap-40 sm-gap-20 mb-72 sm-mb-48">
          <div className="custom-descr text-center f-14 caps lh-90 -ls-02 font-mono" style={{ '--max-w': '32ch', '--sm-fixed-w': '20.4rem' }} data-module="TextAnimation">
            <div className="rich-inherit w-richtext">
              <h3>Contact Us</h3>
            </div>
          </div>
          <div className="custom-descr text-center f-32 caps lh-105 -ls-02 sm-f-20" style={{ '--max-w': '28ch' }} data-module="TextAnimation">
            <div className="rich-inherit w-richtext">
              <h3>Get in touch</h3>
            </div>
          </div>
        </div>
        <div className="contact_wrapper">
          <div className="contact_info">
            <div className="v-flex-left-top gap-32" style={{ gap: '2rem' }}>
              <div className="contact_info-item">
                <div className="f-14 font-mono lh-110 caps mb-8" style={{ marginBottom: '0.5rem', opacity: 0.7 }}>EMAIL</div>
                <a href="mailto:booking@theexpandables.se" className="text-link">
                  <div className="f-15 font-body lh-120">booking@theexpandables.se</div>
                </a>
              </div>
              <div className="contact_info-item">
                <div className="f-14 font-mono lh-110 caps mb-8" style={{ marginBottom: '0.5rem', opacity: 0.7 }}>PHONE</div>
                <a href="tel:+46737047843" className="text-link">
                  <div className="f-15 font-body lh-120">+46 73 704 78 43</div>
                </a>
              </div>
              <div className="contact_info-item">
                <div className="f-14 font-mono lh-110 caps mb-8" style={{ marginBottom: '0.5rem', opacity: 0.7 }}>LOCATION</div>
                <div className="f-15 font-body lh-120">Stockholm, Sweden</div>
              </div>
            </div>
          </div>
          <form className="contact_form" onSubmit={handleSubmit}>
            <div>
              <label className="f-14 font-mono lh-110 caps mb-8 contact_label" htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                className="contact_input"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="f-14 font-mono lh-110 caps mb-8 contact_label" htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                className="contact_input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="f-14 font-mono lh-110 caps mb-8 contact_label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows="4"
                className="contact_input"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn w-inline-block contact_submit">
              <div className="btn_text">
                <div className="f-14 font-mono caps lh-110">SEND MESSAGE</div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
