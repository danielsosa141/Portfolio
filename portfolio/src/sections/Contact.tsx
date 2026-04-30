const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <p className="sec-eyebrow">Rejoignez-moi</p>
      <div className="contact-big">
        Faites-moi <br />
        signe!
        <br />
        <a href="mailto:danielsosa14196@gmail.com">
          Envoyez-moi <br />
          un message
          <span className="arrow-circle">↗</span>
        </a>
      </div>
      <div className="contact-footer">
        <div className="contact-info">
          <a href="mailto:daniel@example.com">danielsosa14196@gmail.com</a>
          <br />
          Paris, France
        </div>
        <div className="social-row">
          <a href="#" className="soc-link">
            LinkedIn
          </a>
          <a href="#" className="soc-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
