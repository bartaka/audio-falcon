import { useState } from 'react';

import styles from './ProjectTile.module.scss';
import ProjectOverlay from './ProjectOverlay';

type Props = {
    imgSrc: string;
    imgAlt: string;
    type: string;
    role: string;
    title: string;
    year: string;
    client: string;
    web: string;
    description: string;
    video: string;
};

const ProjectTile = (props: Props): React.ReactElement => {
    const {
        imgSrc,
        imgAlt,
        type,
        role,
        title,
        year,
        client,
        web,
        description,
        video
    } = props;

    const [tileOverlayed, setTileOverlayed] = useState(false);
    const [overlayDisplayed, setOverlayDisplayed] = useState(false);

    const handleMouseOver = () => setTileOverlayed(true);
    const handleMouseOut = () => setTileOverlayed(false);
    const handleTileClicked = () => setOverlayDisplayed(true);
    const handleClose = () => setOverlayDisplayed(false);

    return (
        <>
            {overlayDisplayed &&
                <ProjectOverlay
                    title={title}
                    year={year}
                    client={client}
                    web={web}
                    description={description}
                    video={video}
                    onClose={handleClose}
                />}
            <div
                className={styles.tile}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleTileClicked}
            >
                <img src={imgSrc} alt={imgAlt} />

                {tileOverlayed && (
                    <div className={styles['overlay-wrapper']}>
                        <div className={styles.overlay}>
                            <h4>{type}</h4>
                            <p>{role}</p>
                            <h3>{title}</h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectTile;