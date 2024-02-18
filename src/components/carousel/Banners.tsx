import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1desktop from '../../assets/carousel/AF-banner01-Strazov-Meadow.jpg';
import banner1mobile from '../../assets/carousel/AF-banner01-Strazov-Meadow-mob.jpg';
import banner2desktop from '../../assets/carousel/AF-banner02-Skalnate-Pleso.jpg';
import banner2mobile from '../../assets/carousel/AF-banner02-Skalnate-Pleso-mob.jpg';
import banner3desktop from '../../assets/carousel/AF-banner03-Tree-Ears-Tatry.jpg';
import banner3mobile from '../../assets/carousel/AF-banner03-Tree-Ears-Tatry-mob.jpg';

const Banners = (): React.ReactElement => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={7000}
      transitionTime={3000}
      animationHandler='fade'
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <picture>
          <source media="(max-width: 799px)" srcSet={banner1mobile} />
          <source media="(min-width: 800px)" srcSet={banner1desktop} />
          <img src="fallback-banner1.jpg" alt="Placeholder for future carousel" />
        </picture>
      </div>
      <div>
        <picture>
          <source media="(max-width: 799px)" srcSet={banner2mobile} />
          <source media="(min-width: 800px)" srcSet={banner2desktop} />
          <img src="fallback-banner1.jpg" alt="Placeholder for future carousel" />
        </picture>
      </div>
      <div>
        <picture>
          <source media="(max-width: 799px)" srcSet={banner3mobile} />
          <source media="(min-width: 800px)" srcSet={banner3desktop} />
          <img src="fallback-banner1.jpg" alt="Placeholder for future carousel" />
        </picture>
      </div>
    </Carousel>
  );
};

export default Banners;
