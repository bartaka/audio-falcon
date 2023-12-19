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

    const [tileOverlayed, setTileOverlayed] = useState(false);
    const [overlayDisplayed, setOverlayDisplayed] = useState(false);

    const handleMouseOver = () => setTileOverlayed(true);
    const handleMouseOut = () => setTileOverlayed(false);
    const handleTileClicked = () => setOverlayDisplayed(true);
    const handleClose = () => setOverlayDisplayed(false);

    return (
        <>
            {
                overlayDisplayed &&
                <ProjectOverlay
                    title={props.title}
                    year={props.year}
                    client={props.client}
                    web={props.web}
                    description={props.description}
                    video={props.video}
                    onClose={handleClose}
                />
            }
            <div
                className={styles.tile}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleTileClicked}
            >
                <img src={props.imgSrc} alt={props.imgAlt} />

                {tileOverlayed && (
                    <div className={styles['overlay-wrapper']}>
                        <div className={styles.overlay}>
                            <h4>{props.type}</h4>
                            <p>{props.role}</p>
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectTile;