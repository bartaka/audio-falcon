import styles from './SectionHeading.module.scss';

const SectionHeading = (props) => {
    return (
        <div className={styles['section-heading']}>
            <h2>{props.heading}</h2>
            {
                props.subheading &&
                <h3>{props.subheading}</h3>
            }
        </div>
    );
};

export default SectionHeading;