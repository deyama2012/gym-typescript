import { useEffect, useState } from 'react';
import { SelectedPage } from './shared/types';
import Navbar from './scenes/navbar';
import Home from './scenes/Home';
import Benefits from './scenes/Benefits';
import OurClasses from './scenes/OurClasses';
import ContactUs from './scenes/contactUs';
import Footer from './scenes/footer/footer';

function App() {
  // Array deconstruction
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);
  console.log();
  const [isTopOfPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
