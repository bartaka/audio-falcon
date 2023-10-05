import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './ProjectOverlay.module.scss';

const Backdrop = (props) => {
    const [visible, setVisible] = useState(false);

    const toggleBodyScroll = (disable) => {
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

const ModalWindow = (props) => {
    const [visible, setVisible] = useState();

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

const ProjectOverlay = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalWindow onClose={props.onClose} />,
                document.getElementById('modal-root')
            )}
        </>
    );
};

export default ProjectOverlay;
