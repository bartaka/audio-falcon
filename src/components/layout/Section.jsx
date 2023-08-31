import styles from './Section.module.scss';

const Section = (props) => {
    return (
        <section
            className={styles.section}
            id={props.sectionId}
        >
            <div className={styles['section-heading']}>
                <h2>{props.heading}</h2>
                {
                    props.subheading &&
                    <h3>{props.subheading}</h3>
                }
            </div>
            {props.children}
        </section>
    );
};

export default Section;