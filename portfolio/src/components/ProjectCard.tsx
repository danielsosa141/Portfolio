import type { Project } from "../data/projects";

type Props = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div className="project-row">
      <div className="proj-left">
        <div className="proj-num">0{index}</div>
        <span
          className={`proj-badge ${project.status === "wip" ? "wip" : "done"}`}
        >
          {project.status === "wip" ? "En cours" : "Complété"}
        </span>
        <p className="proj-client">{project.client}</p>
        <h3 className="proj-title">{project.title}</h3>
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="proj-tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="proj-desc">{project.description}</p>
      </div>
      <div className="proj-right">
        <div className="proj-placeholder">
          {project.image && (
            <img src={project.image} alt="{`img ${project.title}`}" />
          )}
        </div>
        <div className="proj-arrow">↗</div>
      </div>
    </div>
  );
};

export default ProjectCard;
