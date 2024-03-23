import Navigation from '../navigation/Navigation';
import Banners from '../carousel/Banners';

import styles from './Header.module.scss';

const Header = (): React.ReactElement => {
    return (
        <header className={styles.header}>
            <Navigation />
            <Banners />
        </header>
    );
};

export default Header;