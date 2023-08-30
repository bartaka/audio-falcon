import logo from '../../assets/logo/AF_Logo.svg';
import styles from './Navigation.module.scss';

const Navigation = () => {
    const navLinks = [
        ['work', '#portfolio'],
        ['services', '#what-we-do'],
        ['about us', '#about-us'],
        ['contact', '#contact']
    ];

    return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href='/'>
                        <img
                            src={logo}
                            className={styles.logo}
                            alt='Audio Falcon logo'
                        />
                    </a>
                </li>
                {navLinks.map(link => (
                    <li key={link[1]}>
                        <a href={link[1]}>{link[0]}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;