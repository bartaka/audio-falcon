import Section from "../layout/Section";
import ProjectTile from "./ProjectTile";

import { projectsData } from "../../data/portfolioProjects";
import styles from './Portfolio.module.scss';

const Portfolio = () => {
    return (
        <Section
            sectionId='portfolio'
            heading='portfolio'
        >
            <div className={styles['tiles-container']}>
                {
                    projectsData.map(project => (
                        <ProjectTile
                            imgSrc={project.imgSrc}
                            key={project.id}
                            title={project.projectName}
                            role={project.role}
                            type={project.projectType}
                        />
                    ))
                }
            </div>
        </Section>
    );
};

export default Portfolio;