import banner1 from '../../assets/carousel/AF-banner01-Strazov-Meadow.jpg';
import banner2 from '../../assets/carousel/AF-banner02-Skalnate-Pleso.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banners = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={6000}
            transitionTime={5000}
            animationHandler='fade'
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
        >

            <img src={banner1} width='100%' alt='Placeholder for future carousel' />

            <img src={banner2} width='100%' alt='Placeholder for future carousel' />

        </Carousel>
    );
};

export default Banners;
