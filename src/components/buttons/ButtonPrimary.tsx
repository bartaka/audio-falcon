import { ReactElement, ReactNode } from 'react';

import styles from './ButtonPrimary.module.scss';

type Props = {
    btnType: 'button' | 'submit';
    children: ReactNode;
};

const ButtonPrimary = (props: Props): ReactElement => {
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
