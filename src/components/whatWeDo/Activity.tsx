import styles from './Activity.module.scss';

type Props = {
    imgSrc: string;
    imgAlt: string;
    h3: string;
    h4: string;
    p: string;
};

const Activity = (props: Props): React.ReactElement => {
    const { imgSrc, imgAlt, h3, h4, p } = props;

    return (
        <div className={styles.activity}>
            <div className={styles.icon}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className="copy">
                <h3>{h3}</h3>
                <h4>{h4}</h4>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default Activity;
