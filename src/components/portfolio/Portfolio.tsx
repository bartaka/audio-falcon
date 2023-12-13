import Section from "../layout/Section";
import ProjectTile from "./ProjectTile";

import { projectsData } from "../../data/portfolioProjects";
import styles from './Portfolio.module.scss';

const Portfolio = (): React.ReactElement => {
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
                            imgAlt={project.imgAlt}
                            key={project.id}
                            title={project.projectName}
                            role={project.role}
                            type={project.projectType}
                            year={project.year}
                            client={project.client}
                            web={project.web}
                            description={project.description}
                            video={project.video}
                        />
                    ))
                }
            </div>
        </Section>
    );
};

export default Portfolio;