import { Fragment, ReactElement, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import client from '../../data/sanityClient';
import { Banner } from '../../interfaces/Banner';
import { urlFor } from '../../utils/Images';
import Loader from '../loader/Loader';

const Banners = (): ReactElement => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const query: string = '*[_type == "banners"]|order(orderRank)';
      const data: Banner[] = await client.fetch(query);
      setBanners(data);
    };

    fetchBanners();
  }, []);

  return (
    <Fragment>
      {banners.length > 0
        ?
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
          {banners.map((banner: Banner) => (
            <div key={banner.name}>
              <picture>
                <source media='(max-width: 799px)' srcSet={urlFor(banner.mobileImage)} />
                <source media='(min-width: 800px)' srcSet={urlFor(banner.desktopImage)} />
                <img src={urlFor(banner.desktopImage)} alt={banner.altText} />
              </picture>
            </div>
          ))}
        </Carousel>
        :
        <Loader />
      }
    </Fragment>
  );
};

export default Banners;
