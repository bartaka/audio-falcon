import { Fragment, ReactElement, useRef, useState } from 'react';

import styles from './ProjectTile.module.scss';
import ProjectOverlay from './ProjectOverlay';
import { Project } from '../../interfaces/Project';

const ProjectTile = (props: Project): ReactElement => {
  const {
    image,
    imageAltText,
    projectType,
    role,
    projectName
  } = props;

  const tileRef = useRef(null);
  const [overlayDisplayed, setOverlayDisplayed] = useState(false);

  const handleTileClicked = () => setOverlayDisplayed(true);
  const handleClose = () => setOverlayDisplayed(false);

  return (
    <Fragment>
      {overlayDisplayed &&
        <ProjectOverlay
          project={props}
          onClose={handleClose}
        />}
      <div
        ref={tileRef}
        className={styles.tile}
        onClick={handleTileClicked}
      >
        <img src={image} alt={imageAltText} />
        <div className={styles['tile-details']}>
          <h4 className='mt-10'>{projectType}</h4>
          <p>{role}</p>
          <h3>{projectName}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectTile;