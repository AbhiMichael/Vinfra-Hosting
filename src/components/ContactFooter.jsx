export default function ContactFooter() {
  return (
    <section className="page-contact reveal-group">
      <div className="contact-grid">
        <div>
          <div className="contact-section-label">Get in Touch</div>
          <h2 className="contact-title">Let's build<br />something<br />enduring.</h2>
        </div>

        <div className="contact-detail-block">
          <div className="contact-row">
            <div className="contact-row-label">Phone</div>
            <div className="contact-row-value">
              <a href="tel:+919656813254">+91 9656813254</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">Mail</div>
            <div className="contact-row-value">
              <a href="mailto:info@vinfraprojects.com">info@vinfraprojects.com</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">PO Box</div>
            <div className="contact-row-value">670571</div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">Address</div>
            <div className="contact-row-value">Mannamkund, Karuvanchal,<br />Kannur, Kerala</div>
          </div>
          <div className="contact-row">
            <div className="contact-row-label">Branches</div>
            <div className="contact-row-value">Ernakulam · Banglore · Chennai</div>
          </div>
        </div>

        <div className="contact-brand-col">
          <div className="nav-logo" style={{ fontSize: "20px" }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M4 26 L16 8 L28 26 Z" stroke="#E9EEF2" strokeWidth="2.5" fill="none" />
              <path d="M8 26 L16 13 L24 26 Z" fill="#8a0f0f" />
              <line x1="4" y1="26" x2="28" y2="26" stroke="#8a0f0f" strokeWidth="2" />
            </svg>
            Vinfra Projects
          </div>
          <p className="contact-brand-desc">
            A professional company providing Trusless Roofing all over in South India with years of experience in Trusless Roofing Industries. We emphasize on quality of products.
          </p>
          <div className="contact-social-row">
            <button className="social-btn" title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </button>
            <button className="social-btn" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </button>
            <button className="social-btn" title="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </button>
          </div>
          <div className="iso-badge">ISO 9001:2015 Certified</div>
        </div>
      </div>

      <hr className="contact-divider" />

      <div className="contact-footer-bar">
        <div className="footer-copy">
          Powered by <a href="#">White Marketing Studio</a>. All rights reserved.
        </div>
        <div className="footer-copy">vinfraprojects.com</div>
      </div>
    </section>
  );
}