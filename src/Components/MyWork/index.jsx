import { projectsData } from '../../projectsData';
import { Link } from 'react-router-dom';
import './styles.css';

export const MyWork = () => {
    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio">
                {projectsData.map(project => (
                    <Link to={project.id} class="portfolio__item">
                        <img src={project.image} alt={project.title}class="portfolio__img" />
                    </Link>
                ))}
            </div>
        </section>
    )
}