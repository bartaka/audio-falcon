import styles from './ButtonPrimary.module.scss';

type Props = {
    btnType: 'button' | 'submit';
    children: React.ReactNode;
};

const ButtonPrimary = (props: Props): React.ReactElement => {
    const { btnType, children } = props;

    return (
        <button
            className={styles.btn}
            type={btnType}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
