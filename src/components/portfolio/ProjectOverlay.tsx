import { MouseEventHandler, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './ProjectOverlay.module.scss';

type PropsBackdrop = {
    onClose: MouseEventHandler<HTMLDivElement>;
};

type PropsModalWindow = {
    onClose: MouseEventHandler<HTMLButtonElement>;
};

type PropsProjectOverlay = {
    onClose: MouseEventHandler<HTMLElement>;
};

const Backdrop = (props: PropsBackdrop) => {
    const [visible, setVisible] = useState(false);

    const toggleBodyScroll = (disable: boolean) => {
        document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    useEffect(() => {
        toggleBodyScroll(true);
        setVisible(true);

        return () => {
            toggleBodyScroll(false);
            setVisible(false);
        };
    }, []);

    return (
        <div
            className={`${styles.backdrop} ${styles['fade-in']} ${visible ? styles.visible : ''}`}
            onClick={props.onClose}
        ></div>
    );
};

const ModalWindow = (props: PropsModalWindow) => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        setVisible(true);

        return () => setVisible(false);
    }, []);

    return (
        <div className={`${styles.modal} ${styles['fade-in']} ${visible ? styles.visible : ''}`}>
            <h2>project name</h2>
            <p>description - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae deserunt pariatur cumque obcaecati, ratione, error voluptas culpa facere cum, quae ad quibusdam animi? Quibusdam quaerat libero nisi hic aliquid accusantium fugit natus, deleniti doloremque neque omnis aperiam alias in adipisci.</p>
            <p>image?</p>
            <p>external link to project?</p>
            <button onClick={props.onClose}>close</button>
        </div>
    );
};

const ProjectOverlay = (props: PropsProjectOverlay) => {
    const backdropRoot = document.getElementById('backdrop-root');
    const modalRoot = document.getElementById('modal-root');

    if (!backdropRoot || !modalRoot) {
        throw new Error('Required root elements not found');
    }

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                backdropRoot
            )}
            {ReactDOM.createPortal(
                <ModalWindow onClose={props.onClose} />,
                modalRoot
            )}
        </>
    );
};

export default ProjectOverlay;
