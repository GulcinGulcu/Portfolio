import "./styles.css";
import { techStackData } from "./tech-stack-data";

export const TechStack = () => {
  return (
    <section className="tech-stack">
      {techStackData.map((data) => (
        <div className="tech-stack__item" key={data.id}>
          <span>{data.title}</span>
        </div>
      ))}
    </section>
  );
};
