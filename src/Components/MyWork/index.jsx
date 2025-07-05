import { projectsData } from "../../projectsData";
import { Link } from "react-router-dom";
import "./styles.css";

export const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        {projectsData.map((project) => (
          <Link to={project.id} key={project.id} className="portfolio__item">
            <img
              src={project.image}
              alt={project.title}
              className="portfolio__img"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
