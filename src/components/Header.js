import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
       <div className="marquee bg-gray-700">
        <span className="marquee-text">We are still in beta mode, The demo call is highly tuned for Toingg's help desk and when you make a call with us with Toingg you are agreeing all the T&C's by default</span>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">TOINGG</h1>
        <nav className="hidden md:flex flex-grow justify-end">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Contact</a></li>
            <li><a href="#projects" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Documentation</a></li>
            <li><a href="#contact" className="hover:underline">Join our community</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="block text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-gray-800">
            <ul className="flex flex-col items-center">
              <li><a onClick={toggleMenu} href="#about" className="block py-2 px-4 text-white hover:bg-gray-700">Contact</a></li>
              <li><a onClick={toggleMenu} href="#projects" className="block py-2 px-4 text-white hover:bg-gray-700">Pricing</a></li>
              <li><a onClick={toggleMenu} href="#contact" className="block py-2 px-4 text-white hover:bg-gray-700">Documentation</a></li>
              <li><a onClick={toggleMenu} href="#contact" className="block py-2 px-4 text-white hover:bg-gray-700">Join our community</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
