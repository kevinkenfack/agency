import { Mail, Phone } from 'lucide-react';
import '../styles/IdeaSection.css';

export default function IdeaSection() {
  const contactInfo = [
    {
      icon: Mail,
      href: "mailto:hi@uiroom.in",
      text: "hi@uiroom.in",
      ariaLabel: "Send us an email"
    },
    {
      icon: Phone,
      href: "tel:+919499888170",
      text: "+91 94 99 888 170",
      ariaLabel: "Call us"
    }
  ];

  return (
    <section className="idea-section">
      <div className="idea-container">
        <div className="idea-content">
          <h2 className="idea-title">Have an idea?</h2>
          <p className="idea-description">
            SaaS, Web App, UI/UX, Graphic Design, connect with us.
            Our team will respond in 24hr with estimate.
          </p>
        </div>

        <div className="idea-grid">
          <div className="image-container">
            <div className="image-wrapper">
              <div className="image-background" aria-hidden="true" />
              <img
                src="/girl-using-laptop-sitting-floor.webp"
                alt="Cartoon woman with laptop"
                className="main-image"
              />
            </div>
          </div>

          <div className="contact-container">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <info.icon className="contact-icon" />
                <a
                  href={info.href}
                  className="contact-link"
                  aria-label={info.ariaLabel}
                >
                  {info.text}
                </a>
              </div>
            ))}
            <p className="contact-note">
              *Our Team will respond in 24hrs on Business Days IST (Indian Standard Time)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
