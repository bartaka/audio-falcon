import React, { useEffect, useRef, useState } from 'react';

import styles from './ProjectTile.module.scss';
import ProjectOverlay from './ProjectOverlay';

type Props = {
    imgSrc: string;
    imgAlt: string;
    type: string;
    role: string;
    title: string;
    year: string;
    client?: string;
    web: string;
    note?: string;
    description: string;
    video?: string;
};

const ProjectTile = (props: Props): React.ReactElement => {
    const {
        imgSrc,
        imgAlt,
        type,
        role,
        title,
        year,
        client = '',
        web,
        note = '',
        description,
        video = ''
    } = props;

    const tileRef = useRef(null);
    const [overlayDisplayed, setOverlayDisplayed] = useState(false);

    const handleTileClicked = () => setOverlayDisplayed(true);
    const handleClose = () => setOverlayDisplayed(false);

    return (
        <React.Fragment>
            {overlayDisplayed &&
                <ProjectOverlay
                    title={title}
                    year={year}
                    role={role}
                    client={client}
                    web={web}
                    note={note}
                    description={description}
                    video={video}
                    imgSrc={imgSrc}
                    onClose={handleClose}
                />}
            <div
                ref={tileRef}
                className={styles.tile}
                onClick={handleTileClicked}
            >
                <img src={imgSrc} alt={imgAlt} />
                <div className={styles['tile-details']}>
                    <h4>{type}</h4>
                    <p>{role}</p>
                    <h3>{title}</h3>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProjectTile;