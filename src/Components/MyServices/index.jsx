import "./styles.css";

export const MyServices = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Web Development</h3>
          <p>
            With a solid background in front-end development in React/TypeScript/NextJS, I can
            create responsive websites with high-quality code applying UI/UX
            aspects to make them functional, accessible and aesthetically
            engaging for users.
          </p>
        </div>
        <div className="service">
          <h3>UI/UX Design</h3>
          <p>
            I specialize in crafting intuitive and visually engaging user
            interfaces using Figma, especially for personal and portfolio
            projects. I enjoy designing clean, simple interfaces and then
            bringing them to life with front-end code.
          </p>
        </div>
        <div className="service">
          <h3>External Libraries/State Management Tools</h3>
          <p>
            Using third party libraries like MUI, TailwindCSS or Daisy UI, I can
            improve code performance. Using Redux or Context API which provides
            maintaining a predictable state container for JavaScript apps, I can
            create centralized state management solutions throughout the project
            and increase the performance of the application.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};
