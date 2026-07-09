const Hero = () => {
  return (
    <section id="home" className="hero">
      <p className="hero-eyebrow">
        Étudiant 1ère année · Bachelor Informatique & Tech
      </p>
      <h1 className="hero-name">
        Daniel
        <br />
        Sosa
      </h1>
      <div className="hero-bottom">
        <p className="hero-desc">
          <strong>Passionné et déterminé</strong>
        </p>
        <div className="hero-badges">
          <span className="badge">
            <span className="badge-dot pulse"></span>
            Disponible
          </span>
          <span className="badge">
            Bachelor Informatique &amp; Tech · Paris
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
