import { MouseEventHandler, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './ProjectOverlay.module.scss';

type PropsBackdrop = {
    onClose: MouseEventHandler<HTMLDivElement>;
};

type PropsModalWindow = {
    title: string;
    year: string;
    role: string;
    client: string;
    web: string;
    note: string;
    description: string;
    video: string;
    onClose: MouseEventHandler<HTMLButtonElement>;
};

type PropsProjectOverlay = {
    title: string;
    year: string;
    role: string;
    client: string;
    web: string;
    note: string;
    description: string;
    video: string;
    onClose: MouseEventHandler<HTMLElement>;
};

const Backdrop = (props: PropsBackdrop): React.ReactElement => {
    const { onClose } = props;
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
            onClick={onClose}
        />
    );
};

const ModalWindow = (props: PropsModalWindow): React.ReactElement => {
    const { title, year, role, client, web, note, description, video, onClose } = props;
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        setVisible(true);

        return () => setVisible(false);
    }, []);

    return (
        <div className={`${styles.modal} ${styles['fade-in']} ${visible ? styles.visible : ''}`}>
            <button className={styles['close-button']} onClick={onClose}>&times;</button>
            <h2>{title}</h2>
            <div className={styles['modal-content']}>
                <div className={styles['modal-vid']}>
                    <iframe
                        id='inlineFrame'
                        title='Inline Frame'
                        src={`https://www.youtube.com/embed/${new URL(video).searchParams.get('v')}`}
                    />
                </div>
                <div className={styles['modal-data']}>
                    <p>
                        <span className={styles['description-term']}>YEAR:</span> {year}
                    </p>
                    <p>
                        <span className={styles['description-term']}>WORK:</span> {role}
                    </p>
                    {client &&
                        <p>
                            <span className={styles['description-term']}>CLIENT:</span> {client}
                        </p>
                    }
                    <p>
                        <span className={styles['description-term']}>WEB:</span> <a href={web} target='_blank' rel='noreferrer'>{web}</a>
                    </p>
                    {note &&
                        <p
                            className={styles['note']}
                            dangerouslySetInnerHTML={{
                                __html: note.replace(
                                    'Studio Beep',
                                    '<a href="https://studiobeep.cz" target="_blank" rel="noopener noreferrer">Studio Beep</a>'
                                )
                            }}
                        />
                    }
                    <p>
                        <span className={styles['description-term']}>DESCRIPTION:</span> {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ProjectOverlay = (props: PropsProjectOverlay): React.ReactElement => {
    const { title, year, role, client, web, note, description, video, onClose } = props;
    const backdropRoot = document.getElementById('backdrop-root');
    const modalRoot = document.getElementById('modal-root');

    if (!backdropRoot || !modalRoot) {
        throw new Error('Required root elements not found');
    }

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                backdropRoot
            )}
            {ReactDOM.createPortal(
                <ModalWindow
                    title={title}
                    year={year}
                    role={role}
                    client={client}
                    web={web}
                    note={note}
                    description={description}
                    video={video}
                    onClose={onClose}
                />,
                modalRoot
            )}
        </>
    );
};

export default ProjectOverlay;
