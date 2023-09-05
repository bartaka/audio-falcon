import { Link } from 'react-scroll';

import styles from './Navigation.module.scss';
import logo from '../../assets/logo/AF_Logo_With name.svg';

const Navigation = () => {
    const navLinks = [
        ['work', 'portfolio'],
        ['services', 'what-we-do'],
        ['about us', 'about-us'],
        ['contact', 'contact']
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
                {navLinks.map(link => (
                    <li key={link[1]}>
                        <Link
                            to={link[1]}
                            smooth
                            duration={1000}
                            offset={-10}
                        >
                            {link[0]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;