import React, { useRef, useState } from 'react';

import styles from './ProjectTile.module.scss';
import ProjectOverlay from './ProjectOverlay';
import { Project } from '../../interfaces/Project';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

const ProjectTile = (props: Project): React.ReactElement => {
  const {
    image,
    imageAltText,
    projectType,
    role,
    projectName,
    year,
    client = '',
    website,
    // note = '',
    description,
    video = ''
  } = props;

  const tileRef = useRef(null);
  const [overlayDisplayed, setOverlayDisplayed] = useState(false);

  const handleTileClicked = () => setOverlayDisplayed(true);
  // const handleClose = () => setOverlayDisplayed(false);

  return (
    <React.Fragment>
      {overlayDisplayed &&
        <ProjectOverlay
          projectName={projectName}
          projectType={projectType}
          imageAltText={imageAltText}
          year={year}
          role={role}
          client={client}
          website={website}
          // note={note}
          description={description}
          video={video}
          image={image || ''}
        // onClose={handleClose}
        />}
      <div
        ref={tileRef}
        className={styles.tile}
        onClick={handleTileClicked}
      >
        <img src={image as string} alt={imageAltText} />
        <div className={styles['tile-details']}>
          <h4 className='mt-10'>{projectType}</h4>
          <p>{role}</p>
          <h3>{projectName}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectTile;