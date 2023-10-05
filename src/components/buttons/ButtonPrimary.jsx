import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = (props) => {
    return (
        <button
            className={styles.btn}
            type={props.btnType}
        >
            {props.text}
        </button>
    );
};

export default ButtonPrimary;
