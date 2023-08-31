import classes from './Footer.module.scss';
import logo from '../../assets/logo/AF_Logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <img src={logo} alt='Audio Falcon logo' width='50px' />
      <p>&copy; Audio Falcon {currentYear}</p>
    </footer>
  );
};

export default Footer;
