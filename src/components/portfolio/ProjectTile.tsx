import { Fragment, ReactElement, useRef, useState } from 'react';

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
        className="overflow-hidden cursor-pointer relative group"
        onClick={handleTileClicked}
      >
        <img src={image} alt={imageAltText} className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
        <div className="absolute top-0 left-0 w-full h-full text-center backdrop-blur-[3px] backdrop-brightness-50 p-[0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h4 className="mt-10 -mb-[2rem] capitalize text-[1.8rem] font-am-sans 3xl:text-[2rem]">{projectType}</h4>
          <p className="font-am-sans text-[1.2rem] leading-none w-[60%] mx-auto mt-[1.5rem] 3xl:text-[1.5rem]">{role}</p>
          <h3 className="mt-[5rem] mx-auto uppercase text-[2.5rem] w-[80%] leading-none max-md:font-extralight 3xl:text-[3rem] 3xl:mt-[6rem]">{projectName}</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectTile;
