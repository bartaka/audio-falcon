import classes from './Footer.module.scss';
import logo from '../../assets/logo/AF_Logo.svg';

const Footer = (): React.ReactElement => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <img src={logo} alt='Audio Falcon logo' width='50px' />
      <p>&copy; Audio Falcon {currentYear}</p>
      {/* <p className={classes.credit}>site by <a href='#'>bartaka</a></p> */}
    </footer >
  );
};

export default Footer;
