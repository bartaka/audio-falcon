import React, { MouseEventHandler, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Project } from '../../interfaces/Project';
import styles from './ProjectOverlay.module.scss';
import { truncate } from '../../utils/Strings';

const ProjectOverlay = (props: Project): React.ReactElement => {
    const {
        projectName,
        year,
        role,
        client,
        website,
        note,
        description,
        video = '',
        image,
        // onClose
    } = props;

    const backdropRoot = document.getElementById('backdrop-root');
    const modalRoot = document.getElementById('modal-root');

    if (!backdropRoot || !modalRoot) {
        throw new Error('Required root elements not found');
    }

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
        };
    }, []);

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={styles.backdrop}
                // onClick={onClose}
                />,
                backdropRoot
            )}
            {ReactDOM.createPortal(
                <div className={styles.modal}>
                    <button className={styles['close-button']}
                    // onClick={onClose}
                    >
                        &times;
                    </button>
                    <h2>{projectName}</h2>
                    <div className={styles['modal-content']}>
                        <div className={styles['modal-vid']}>
                            {video
                                ?
                                <iframe
                                    id='inlineFrame'
                                    title='Inline Frame'
                                    src={`https://www.youtube.com/embed/${new URL(video).searchParams.get('v')}`}
                                />
                                :
                                <img src={image} />
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
                                <span className={styles['description-term']}>WEB:</span>
                                {' '}
                                <a
                                    href={website}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {truncate(website, 41)}
                                </a>
                            </p>
                            {note &&
                                <p
                                    className={styles['note']}
                                // dangerouslySetInnerHTML={{
                                //     __html: note.replace(
                                //         'Studio Beep',
                                //         '<a href="https://studiobeep.cz" target="_blank" rel="noopener noreferrer">Studio Beep</a>'
                                //     )
                                // }}
                                />
                            }
                            <p className={styles.description}>
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
