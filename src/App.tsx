import { useState } from 'react';
import Navbar from './scenes/navbar';

export const Page = {
  Home: 'home',
  Benefits: 'benefits',
  OurClasses: 'ourclasses',
  ContactUs: 'contactus',
};

function App() {
  const [selectedPage, setSelectedPage] = useState(Page.Home);

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
