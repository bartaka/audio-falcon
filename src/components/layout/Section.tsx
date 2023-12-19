import { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
    sectionId: string;
    heading: string;
    subheading?: string;
    children: ReactNode;
};

const Section = (props: Props) => {
    const { sectionId, heading, subheading, children } = props;

    return (
        <section
            className={styles.section}
            id={sectionId}
        >
            <div className={styles['section-heading']}>
                <h2>{heading}</h2>
                {
                    subheading &&
                    <h3>{subheading}</h3>
                }
            </div>
            {children}
        </section>
    );
};

export default Section;