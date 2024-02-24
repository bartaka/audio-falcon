import Navigation from '../navigation/Navigation';
import Banners from '../carousel/Banners';

const Header = (): React.ReactElement => {
    return (
        <header>
            <Navigation />
            <Banners />
        </header>
    );
};

export default Header;