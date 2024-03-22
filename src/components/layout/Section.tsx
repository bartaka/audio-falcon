import { Fade } from 'react-awesome-reveal';

import styles from './Section.module.scss';

type Props = {
    sectionId: string;
    heading: string;
    subheading?: string;
    backgroundGradient?: boolean;
    children: React.ReactNode;
};

const Section = (props: Props): React.ReactElement => {
    const {
        sectionId,
        heading,
        subheading,
        backgroundGradient = false,
        children
    } = props;

    const sectionStyles = `
        ${styles.section} ${backgroundGradient
            ? styles.gradient
            : ''}
    `;

    return (
        <Fade
            duration={1500}
            delay={200}
            triggerOnce
        >
            <section
                className={sectionStyles}
                id={sectionId}
            >
                <div className={styles['section-heading']}>
                    <h2>{heading}</h2>
                    {subheading &&
                        <h3>{subheading}</h3>}
                </div>
                <Fade
                    delay={500}
                    duration={1500}
                    triggerOnce
                >
                    {children}
                </Fade>
            </section>
        </Fade>
    );
};

export default Section;
