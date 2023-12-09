import { MouseEventHandler, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './ProjectOverlay.module.scss';

type PropsBackdrop = {
    onClose: MouseEventHandler<HTMLDivElement>;
};

type PropsModalWindow = {
    title: string;
    year: string;
    client: string;
    web: string;
    description: string;
    video: string;
    onClose: MouseEventHandler<HTMLButtonElement>;
};

type PropsProjectOverlay = {
    title: string;
    year: string;
    client: string;
    web: string;
    description: string;
    video: string;
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
            <h2>{props.title}</h2>
            <div className={styles['modal-content']}>
                <div className={styles['modal-vid']}>
                    <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        src={props.video}>
                    </iframe>
                </div>
                <div className={styles['modal-data']}>
                    <p>YEAR: {props.year}</p>
                    <p>CLIENT: {props.client}</p>
                    <p>WEB: <a href={props.web} target='_blank'>{props.web}</a></p>
                    <p>DESCRIPTION: {props.description}</p>
                </div>
            </div>
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
                <ModalWindow
                    title={props.title}
                    year={props.year}
                    client={props.client}
                    web={props.web}
                    description={props.description}
                    video={props.video}
                    onClose={props.onClose}
                />,
                modalRoot
            )}
        </>
    );
};

export default ProjectOverlay;
