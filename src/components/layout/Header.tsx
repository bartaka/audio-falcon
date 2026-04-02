import { ReactElement } from 'react';

import Navigation from '../navigation/Navigation';
import Banners from '../carousel/Banners';

const Header = (): ReactElement => {
    return (
        <header className="min-h-[50vh] mt-[105px] md:min-h-[90vh] md:mt-0">
            <Navigation />
            <Banners />
        </header>
    );
};

export default Header;
