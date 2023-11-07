import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1 from '../../assets/carousel/AF-banner01-Strazov-Meadow.jpg';
import banner2 from '../../assets/carousel/AF-banner02-Skalnate-Pleso.jpg';
import banner3 from '../../assets/carousel/AF-banner03-Tree-Ears-Tatry.jpg';

const Banners = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={7000}
      transitionTime={3000}
      animationHandler='fade'
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src={banner1} width='100%' alt='Placeholder for future carousel' />
      </div>
      <div>
        <img src={banner2} width='100%' alt='Placeholder for future carousel' />
      </div>
      <div>
        <img src={banner3} width='100%' alt='banner 3' />
      </div>
    </Carousel>
  );
};

export default Banners;
