import styles from './Activity.module.scss';

const Activity = (props) => {
    return (
        <div className={styles.activity}>
            <div className={styles.icon}>
                <img
                    src={props.imgSource}
                    alt={props.imgAlt}
                />
            </div>
            <h3>{props.h3}</h3>
            <h4>{props.h4}</h4>
        </div>
    );
};

export default Activity;
