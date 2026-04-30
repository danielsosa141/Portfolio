const skills = [
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "SQL",
  "Machine Learning",
  "NLP",
  "Data Analysis",
  "Figma",
  "UI/UX",
  "Git",
  "Linux",
];

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* LEFT */}
      <div className="about-left">
        <p className="sec-eyebrow">My Story</p>
        <h2 className="sec-title about-title">About</h2>
        <div className="about-copy">
          <p>
            Étudiant en <strong>Bachelor Informatique Tech</strong>, je suis
            passionné par la création d'interfaces modernes et par tout ce qui
            touche à la <strong>data et l'intelligence artificielle</strong>.
          </p>
          <p>
            J'aime comprendre comment les données peuvent améliorer les
            expériences utilisateurs et créer des opportunités d'affaires — du
            chatbot NLP au dashboard analytique.
          </p>
          <p>
            Curieux et autonome, je développe mes compétences en{" "}
            <strong>React, Python et Machine Learning</strong> en parallèle de
            ma formation.
          </p>
        </div>
        <a href="/Daniel Sosa Merino.pdf" download className="btn-outline">
          Download CV ↓
        </a>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        <p className="sec-eyebrow">Experience</p>
        <div className="exp-list">
          <div className="exp-row">
            <div>
              <div className="exp-title">Bachelor Informatique &amp; Tech</div>
              <div className="exp-sub">EPITECH / École — 1ère année</div>
            </div>
            <div className="exp-date">formation 2025–2026</div>
          </div>
          <a href="#projects" className="exp-row exp-link">
            <div>
              <div className="exp-title">
                Projets académiques{" "}
                <span className="exp-link-label">↓ voir</span>
              </div>
              <div className="exp-sub">Chatbot, Data Analyses, TODO List </div>
            </div>
            <div className="exp-date">2025 — 2026</div>
          </a>
        </div>

        <div className="skills-wrap">
          <p className="skills-label">Skills</p>
          <div className="chips">
            {skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
