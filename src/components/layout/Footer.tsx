import classes from './Footer.module.scss';
import logo from '../../assets/logo/AF_Logo.svg';

const Footer = (): React.ReactElement => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div>
        <img src={logo} alt='Audio Falcon logo' width='50px' />
        <p>&copy; Audio Falcon {currentYear}</p>
      </div>
      <div>
        <p>additional links?</p>
      </div>
    </footer>
  );
};

export default Footer;
