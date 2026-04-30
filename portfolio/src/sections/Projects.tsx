import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="work-header">
        <div>
          <p className="sec-eyebrow">Selected Projects</p>
          <h2 className="sec-title">Work</h2>
        </div>
      </div>

      {visible.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i + 1} />
      ))}

      <div className="voir-tous-wrap">
        <button className="btn-outline" onClick={() => setShowAll(!showAll)}>
          <span>
            {showAll ? "Réduire" : `Voir tous les projets (${projects.length})`}
          </span>
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ↓
          </span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
