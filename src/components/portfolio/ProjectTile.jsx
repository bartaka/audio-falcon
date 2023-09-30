import { useState } from 'react';

import styles from './ProjectTile.module.scss';

import porftoPlaceholder from '../../assets/portfolio/portfo-placeholder.jpg';

const ProjectTile = (props) => {

    const [tileOverlayed, setTileOverlayed] = useState(false);

    const handleMouseOver = () => setTileOverlayed(true);
    const handleMouseOut = () => setTileOverlayed(false);

    return (
        <div
            className={styles.tile}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
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
    );
};

export default ProjectTile;