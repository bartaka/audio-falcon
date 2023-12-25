import { Link } from 'react-scroll';

import styles from './Navigation.module.scss';
import logo from '../../assets/logo/AF_Logo_With name.svg';

const Navigation = (): React.ReactElement => {
    const navLinks = [
        { link: 'work', url: 'portfolio' },
        { link: 'services', url: 'what-we-do' },
        { link: 'about us', url: 'about-us' },
        { link: 'contact', url: 'contact' }
    ];

    return (
        <div className={styles.navigation}>
            <a href='/'>
                <img
                    src={logo}
                    className={styles.logo}
                    alt='Audio Falcon logo'
                />
            </a>
            <ul>
                <li>
                </li>
                {navLinks.map(entry => (
                    <li key={entry.link}>
                        <Link
                            to={entry.url}
                            smooth
                            duration={1000}
                            offset={-10}
                        >
                            {entry.link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
