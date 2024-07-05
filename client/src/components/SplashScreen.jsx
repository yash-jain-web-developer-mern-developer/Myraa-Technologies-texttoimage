// SplashScreen.jsx
import React, { useEffect } from 'react';
import {Myraatech} from '../assets/index'; // Adjust the path to your logo image

const SplashScreen = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 5000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white text-center">
      <div className="cube-container mb-8"> {/* Adjust margin-bottom if needed */}
        <div className="cube">
          <div className="cube-face front">
            <img src={Myraatech} alt="Myraatech Logo" />
          </div>
          <div className="cube-face back">
            <img src={Myraatech} alt="Myraatech Logo" />
          </div>
          <div className="cube-face left">
            <img src={Myraatech} alt="Myraatech Logo" />
          </div>
          <div className="cube-face right">
            <img src={Myraatech} alt="Myraatech Logo" />
          </div>
          <div className="cube-face top">
            <img src={Myraatech} alt="Myraatech Logo" />
          </div>
          <div className="cube-face bottom">
            <img src={Myraatech} alt="Myraatech Logo" />
          </div>
        </div>
      </div>
      <h1 className="text-4xl mb-2">Welcome to Myraa Technologies</h1>
      <h1 className="text-4xl mb-2">Image-Generator</h1>
      <p className="text-xl">Loading...</p>
    </div>
  );
};

export default SplashScreen;
