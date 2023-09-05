import styles from './ProjectTile.module.scss';

import porftoPlaceholder from '../../assets/portfolio/portfo-placeholder.jpg';

const ProjectTile = (props) => {
    return (
        <div className={styles.tile}>
                <img src={porftoPlaceholder} alt="" />
        </div>
    );
};

export default ProjectTile;