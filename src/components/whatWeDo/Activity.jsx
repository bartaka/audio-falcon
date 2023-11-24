import styles from './Activity.module.scss';

const Activity = (props) => {
    return (
        <div className={styles.activity}>
            <div className={styles.icon}>
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                />
            </div>
            <div className="copy">
                <h3>{props.h3}</h3>
                <h4>{props.h4}</h4>
                <p>{props.p}</p>
            </div>
        </div>
    );
};

export default Activity;
