import Header from './components/layout/Header';
import Portfolio from './components/portfolio/Portfolio';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUsSection from './components/contactUs/ContactUsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <hr />
      <Portfolio />
      <hr />
      <WhatWeDo />
      <hr />
      <AboutUs />
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
