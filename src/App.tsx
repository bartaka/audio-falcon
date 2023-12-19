import Header from './components/layout/Header';
import Portfolio from './components/portfolio/Portfolio';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUsSection from './components/contactUs/ContactUsSection';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/buttons/ScrollToTop';

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Portfolio />
      <WhatWeDo />
      <AboutUs />
      <ContactUsSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
