import React, { useState } from 'react';
import { RiAccountPinCircleLine } from 'react-icons/ri';

function Account() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="px-4 py-2 rounded text-2xl"
      >
        <RiAccountPinCircleLine />
      </button>
      {isOpen && (
        <div className="absolute right-5 w-48 bg-white border border-gray-200 rounded shadow-lg">
          <ul className="list-none p-0 m-0">
            <li>
              <a href="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Minha conta
              </a>
            </li>
            <li>
              <a href="/favorites" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Favorito
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Account;
