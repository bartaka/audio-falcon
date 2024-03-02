import React, { MouseEventHandler, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './ProjectOverlay.module.scss';

type Props = {
    title: string;
    year: string;
    role: string;
    client: string;
    web: string;
    note: string;
    description: string;
    video?: string;
    imgSrc?: string;
    onClose: MouseEventHandler<HTMLElement>;
};

const ProjectOverlay = (props: Props): React.ReactElement => {
    const {
        title,
        year,
        role,
        client,
        web,
        note,
        description,
        video = '',
        imgSrc = '',
        onClose
    } = props;

    const backdropRoot = document.getElementById('backdrop-root');
    const modalRoot = document.getElementById('modal-root');

    if (!backdropRoot || !modalRoot) {
        throw new Error('Required root elements not found');
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={styles.backdrop} onClick={onClose} />,
                backdropRoot
            )}
            {ReactDOM.createPortal(
                <div className={styles.modal}>
                    <button className={styles['close-button']} onClick={onClose}>&times;</button>
                    <h2>{title}</h2>
                    <div className={styles['modal-content']}>
                        <div className={styles['modal-vid']}>
                            {video ?
                                <iframe
                                    id='inlineFrame'
                                    title='Inline Frame'
                                    src={`https://www.youtube.com/embed/${new URL(video).searchParams.get('v')}`}
                                />
                                :
                                <img src={imgSrc} />
                            }
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
                </div>,
                modalRoot
            )}
        </React.Fragment>
    );
};

export default ProjectOverlay;
