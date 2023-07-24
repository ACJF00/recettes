import React from 'react';
import Logo from '../images/logo-no-background.png';

const Header = () => {
  return (
    <header className="min-h-[5rem] bg-emerald-500 text-white flex justify-center items-center text-xl">
      <img src={Logo} alt="logo" className='w-40'/>
    </header>
  );
};

export default Header;