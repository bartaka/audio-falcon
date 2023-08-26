import Portfolio from './components/portfolio/Portfolio';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUsSection from './components/contactUs/ContactUsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Portfolio />
      <hr />
      <WhatWeDo />
      <hr />
      <AboutUs />
      <hr />
      <ContactUsSection />
      <hr />
      <Footer />
    </>
  );
}

export default App;
