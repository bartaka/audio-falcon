import { ReactElement, useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
            className={`fixed top-[80vh] md:top-[85vh] right-[4rem] z-50 text-[1.5rem] border border-white rounded-full p-[1rem] text-text-main bg-black [transition:opacity_0.3s_ease,transform_0.5s_ease] hover:scale-110 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={goToTopHandler}
        >
            <FaArrowUp className="block mx-auto" />
        </button>
    );
};

export default ScrollToTop;
