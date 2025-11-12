import { noteworthyProjectsData } from "../../projectsData";
import { Carousel } from "react-responsive-carousel";
import PhoneFrame from "../PhoneFrame";
import { FaGithub } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

export const NoteworthyProjects = () => {
  return (
    <section>
      {noteworthyProjectsData.map((project, i) => (
        <section className={`noteworthy-projects ${i % 2 === 1 ? "reverse" : ""}`} id={project.id}>
          <h2 className="section__title section__title--noteworthy-projects">
            <span>{project.title}</span>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">
              <FaGithub className="icon__github" />
            </a>
          </h2>
          <p className="section__subtitle section__subtitle--noteworthy-projects">
            {project.subtitle}
          </p>
          {project.isMobile && (
            <PhoneFrame className="noteworthy-projects__carousel">
              <Carousel
                autoPlay={false}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                emulateTouch
              >
                {project.image.map((src, j) => (
                  <div
                    key={j}
                    className="noteworthy-projects__carousel-img-container"
                  >
                    <img
                      src={src}
                      alt={`slide-${j}`}
                      className="noteworthy-projects__carousel-img"
                    />
                  </div>
                ))}
              </Carousel>
            </PhoneFrame>
          )}
          <div className="noteworthy-projects__body">
            <p>{project.description}</p>
            {project.bullets.map((item, k) => (
              <p key={k}>• {item}</p>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};
