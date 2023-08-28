import logo from '../../assets/logo/AF_Logo.svg';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href='https://audio-falcon.com/'>
                        <img src={logo} className={styles.logo} alt='Audio Falcon logo' />
                    </a>
                </li>
                <li>
                    <a href='#portfolio'>work</a>
                </li>
                <li>
                    <a href='#what-we-do'>services</a>
                </li>
                <li>
                    <a href='#about-us'>about us</a>
                </li>
                <li>
                    <a href='#contact'>contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;