import { useState } from 'react';

import styles from './ProjectTile.module.scss';
import ProjectOverlay from './ProjectOverlay';

import porftoPlaceholder from '../../assets/portfolio/portfo-placeholder.jpg';

const ProjectTile = (props) => {

    const [tileOverlayed, setTileOverlayed] = useState(false);
    const [overlayDisplayed, setOverlayDisplayed] = useState(false);

    const handleMouseOver = () => setTileOverlayed(true);
    const handleMouseOut = () => setTileOverlayed(false);
    const handleTileClicked = () => setOverlayDisplayed(true);
    const handleClose = () => setOverlayDisplayed(false);

    return (
        <>
            {overlayDisplayed && <ProjectOverlay onClose={handleClose} />}
            <div
                className={styles.tile}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleTileClicked}
            >
                <img src={porftoPlaceholder} alt="" />

                {tileOverlayed && (
                    <div className={styles.overlay}>
                        <h4>{props.type}</h4>
                        <p>{props.role}</p>
                        <h3>{props.title}</h3>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectTile;