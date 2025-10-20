import { noteworthyProjectsData } from "../../projectsData";
import { Carousel } from "react-responsive-carousel";
import PhoneFrame from "../PhoneFrame";
import { FaGithub } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

export const NoteworthyProjects = () => {
  return (
    <section>
      {noteworthyProjectsData.map((project) => (
        <section className="noteworthy-projects" id={project.id}>
          <h2 className="section__title section__title--noteworthy-projects">
            <span>{project.title}</span>
            <a href="https://github.com/GulcinGulcu/wallet" target="_blank">
              <FaGithub className="icon__github" />
            </a>
          </h2>
          <p className="section__subtitle section__subtitle--noteworthy-projects">
            {project.subtitle}
          </p>
          {project.isReactNative && (
            <PhoneFrame className="noteworthy-projects__carousel">
              <Carousel
                autoPlay={false}
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                emulateTouch
              >
                {project.image.map((src, i) => (
                  <div
                    key={i}
                    className="noteworthy-projects__carousel-img-container"
                  >
                    <img
                      src={src}
                      alt={`slide-${i}`}
                      className="noteworthy-projects__carousel-img"
                    />
                  </div>
                ))}
              </Carousel>
            </PhoneFrame>
          )}
          <div className="noteworthy-projects__body">
            <p>{project.description}</p>
            {project.bullets.map((item, i) => (
              <p key={i}>• {item}</p>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};
