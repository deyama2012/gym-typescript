import { useEffect, useState } from 'react';
import Navbar from './scenes/navbar';
import { SelectedPage } from './shared/types';
import Home from './scenes/Home';

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
    </div>
  );
}

export default App;
