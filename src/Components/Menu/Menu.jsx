import React, { useState } from 'react';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import Account from './Account';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" mb-5 w-screen flex justify-end bg-slate-600 text-white p-4">
      <Account />
    </div>
  );
}

export default Menu;
