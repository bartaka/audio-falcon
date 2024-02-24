import styles from './ButtonPrimary.module.scss';

type Props = {
    btnType: 'button' | 'submit';
    text: string;
};

const ButtonPrimary = (props: Props): React.ReactElement => {
    const { btnType, text } = props;

    return (
        <button
            className={styles.btn}
            type={btnType}
        >
            {text}
        </button>
    );
};

export default ButtonPrimary;
