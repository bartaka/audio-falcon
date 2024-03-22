import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1desktop from '../../assets/carousel/AF-banner-Van-Breaking.jpg';
import banner1mobile from '../../assets/carousel/AF-banner-Van-Breaking-mob.jpg';
import banner2desktop from '../../assets/carousel/AF-banner-SaltAndPepper.jpg';
import banner2mobile from '../../assets/carousel/AF-banner-SaltAndPepper-mob.jpg';
import banner3desktop from '../../assets/carousel/AF-banner-Tree-Ears.jpg';
import banner3mobile from '../../assets/carousel/AF-banner-Tree-Ears-mob.jpg';
import banner4desktop from '../../assets/carousel/AF-banner-Strazov-Meadow.jpg';
import banner4mobile from '../../assets/carousel/AF-banner-Strazov-Meadow-mob.jpg';
import banner5desktop from '../../assets/carousel/AF-banner-Tree-Ears-Tatry.jpg';
import banner5mobile from '../../assets/carousel/AF-banner-Tree-Ears-Tatry-mob.jpg';
import banner6desktop from '../../assets/carousel/AF-banner-Strazov-Skoda125.jpg';
import banner6mobile from '../../assets/carousel/AF-banner-Strazov-Skoda125-mob.jpg';
import banner7desktop from '../../assets/carousel/AF-banner-Skalnate-Pleso.jpg';
import banner7mobile from '../../assets/carousel/AF-banner-Skalnate-Pleso-mob.jpg';

const banners = [
  { desk: banner1desktop, mob: banner1mobile, alt: 'Van Breaking' },
  { desk: banner2desktop, mob: banner2mobile, alt: 'Salt and Pepper' },
  { desk: banner3desktop, mob: banner3mobile, alt: 'Tree Ears' },
  { desk: banner4desktop, mob: banner4mobile, alt: 'Strazov Meadow' },
  { desk: banner5desktop, mob: banner5mobile, alt: 'Tree Ears Tatry' },
  { desk: banner6desktop, mob: banner6mobile, alt: 'Strazov Skoda25' },
  { desk: banner7desktop, mob: banner7mobile, alt: 'Skalnate Pleso' }
];

const Banners = (): React.ReactElement => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      transitionTime={2500}
      animationHandler='fade'
      stopOnHover={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
    >
      {banners.map((banner) => (
        <div key={banner.alt}>
          <picture>
            <source media='(max-width: 799px)' srcSet={banner.mob} />
            <source media='(min-width: 800px)' srcSet={banner.desk} />
            <img src={banner.desk} alt={banner.alt} />
          </picture>
        </div>
      ))}
    </Carousel>
  );
};

export default Banners;
