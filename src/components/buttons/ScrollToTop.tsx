import { ReactElement, useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import styles from './ScrollToTop.module.scss';

const ScrollToTop = (): ReactElement => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const goToTopHandler = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else setIsVisible(false);
        });
    }, []);

    return (
        <button
            className={styles['scroll-to-top-btn']}
            style={{
                display: (isVisible)
                    ? 'block'
                    : 'none'
            }}
            onClick={goToTopHandler}
        >
            <FaArrowUp className={styles.arrow} />
        </button>
    );
};

export default ScrollToTop;
