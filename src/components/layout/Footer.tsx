import { ReactElement } from 'react';
import logo from '../../assets/logo/AF_Logo_mobile.png';

const Footer = (): ReactElement => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="font-am-sans text-[2rem] p-[2rem] text-center min-h-[20vh] flex flex-col items-center justify-evenly max-[480px]:text-[1.6rem]">
      <img src={logo} alt='Audio Falcon logo' className="w-[8rem] opacity-70 mb-[2rem]" />
      <p className="m-0 mb-[1rem]">&copy; Audio Falcon {currentYear}</p>
      <p className="text-[1.5rem] -mt-[1.5rem] m-0 mb-[1rem]">site by <a className="text-teal hover:text-text-main" href='https://linkedin.com/in/bartaka' target='_blank'>bartaka</a></p>
    </footer>
  );
};

export default Footer;
