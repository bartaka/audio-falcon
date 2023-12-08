import { useState } from 'react';

import styles from './ProjectTile.module.scss';
import ProjectOverlay from './ProjectOverlay';

type Props = {
    imgSrc: string;
    imgAlt: string;
    type: string;
    role: string;
    title: string;
}

const ProjectTile = (props: Props): React.ReactElement => {

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
                <img src={props.imgSrc} alt={props.imgAlt} />

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