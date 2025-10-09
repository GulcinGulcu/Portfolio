import portfolioImg from '../../Assets/laptop-1839876_1280.jpg'
import "./styles.css";

export const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Front-End Developer based in Sweden
      </p>
      <img src={portfolioImg} alt="User" className="about-me__img" />
      <div className="about-me__body">
        <p>
          During my studies in Frontend Development program at Code2 Career, I
          gained hands-on experience in HTML, CSS, JavaScript, TypeScript and
          React which are essential skills for a frontend developer. I completed
          several projects that involved building responsive and user-friendly
          websites, showcasing my ability to translate design concepts into
          functional code.I expanded my skill set by learning Node.js and Express.js, enabling me to work as a full-stack developer.
        </p>
      </div>
    </section>
  );
};
