import { Link } from 'react-scroll';
import { Transition } from '@headlessui/react';
import { useState, useRef } from 'react';
import styles from './Navigation.module.scss';
import logo from '../../assets/logo/AF_Logo_With name.svg';
import logoMobile from '../../assets/logo/AF_Logo_mobile.png';

const Navigation = (): React.ReactElement => {
  const navLinks = [
    { link: 'work', url: 'portfolio' },
    { link: 'services', url: 'what-we-do' },
    { link: 'about us', url: 'about-us' },
    { link: 'contact', url: 'contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.navigation}>
      <div className='md:hidden bg-black top-0 py-6 px-4 flex justify-between items-center z-50'>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
        >
          {/* TODO: simplify */}
          {!isOpen ? (
            <svg
              className='h-10 w-10'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              className='h-10 w-10'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
        <img src={logoMobile} className={styles.mobileLogo} alt='Audio Falcon logo' />
      </div>

      <div className='hidden md:block'>
        <a href='/'>
          <img src={logo} className={styles.logo} alt='Audio Falcon logo' />
        </a>
        <ul>
          {navLinks.map((entry) => (
            <li key={entry.link}>
              <Link
                to={entry.url}
                smooth='easeOutQuint'
                duration={3000}
                offset={-80}
              >
                {entry.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-90'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {() => (
          <div className='md:hidden top-40 left-0 w-full z-40'>
            <div ref={sidebarRef} className='px-2 pt-2 pb-10 space-y-8 sm:px-3 bg-black'>
              {navLinks.map((entry) => (
                <Link
                  key={entry.link}
                  to={entry.url}
                  smooth='easeOutQuint'
                  duration={3000}
                  offset={-80}
                  className='hover:bg-gray-700 block px-3 py-2 rounded-md text-4xl'
                  onClick={() => setIsOpen(false)}
                >
                  {entry.link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navigation;