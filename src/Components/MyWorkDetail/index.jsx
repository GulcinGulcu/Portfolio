import { useParams } from "react-router-dom";
import { projectsData } from "../../projectsData";
import { useEffect, useState } from "react";
import "./styles.css";

export const MyWorkDetail = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const selectedProject = projectsData.filter((project) => project.id === id);
    setProject(selectedProject[0]);
  }, [id]);

  return (
    <>
      {project && (
        <>
          <section className="intro">
            <h1 className="section__title section__title--intro">
              {project.title}
            </h1>
            <p className="section__subtitle section__subtitle--intro">
              {project.subtitle}
            </p>
            <img src={project.image} alt="project" className="intro__img" />
          </section>
          <div className="portfolio-item-individual">
            <p>{project.summary}</p>
            <p>
              <b>
                Project Link:{" "}
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.link}
                </a>
              </b>
            </p>
          </div>
        </>
      )}
    </>
  );
};
