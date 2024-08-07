import { ReactElement, useEffect, useState } from 'react';

import client from '../../data/sanityClient';
import { Project } from '../../interfaces/Project';
import { urlFor } from '../../utils/Images';
import Section from '../layout/Section';
import Loader from '../loader/Loader';
import ProjectTile from './ProjectTile';
import styles from './Portfolio.module.scss';

const Portfolio = (): ReactElement => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        try {
            const query = '*[_type == "projects"]|order(orderRank)';
            const fetchProjects = async () => {
                const data: Project[] = await client.fetch(query);
                setProjects(data);
            };

            fetchProjects();
        } catch (error) {
            console.error(`Error fetching projects: ${error}`);
        }
    }, []);

    return (
        <Section
            sectionId='portfolio'
            heading='portfolio'
            subheading='latest projects'
            backgroundGradient
        >
            {projects.length > 0
                ?
                <div className={styles['tiles-container']}>
                    {projects.map((project) => (
                        <ProjectTile
                            key={project.slug?.current}
                            image={urlFor(project.image) || ''}
                            imageAltText={project.imageAltText}
                            projectName={project.projectName}
                            role={project.role}
                            projectType={project.projectType}
                            year={project.year}
                            client={project.client}
                            website={project.website}
                            note={project.note}
                            description={project.description}
                            video={project.video}
                        />
                    ))}
                </div>
                :
                <Loader />
            }
        </Section>
    );
};

export default Portfolio;