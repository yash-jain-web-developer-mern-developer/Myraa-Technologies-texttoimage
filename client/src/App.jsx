import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, Myraatech } from './assets';
import { Home, CreatePost } from './page';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen component

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      {isLoaded ? (
        <BrowserRouter>
          <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <Link to="/community">
              <img src={Myraatech} alt="logo" className="w-22 object-contain" />
            </Link>
            <Link to="/community" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">community</Link>
          </header>
          <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
            <Routes>
              <Route path="/community" element={<Home />} />
              <Route path="/" element={<CreatePost />} />
            </Routes>
          </main>
        </BrowserRouter>
      ) : (
        <SplashScreen onLoaded={handleLoaded} />
      )}
    </div>
  );
};

export default App;
