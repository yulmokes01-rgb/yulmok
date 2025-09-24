
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-10 p-3 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <i className="fa-brands fa-youtube text-red-600 text-3xl"></i>
        <span className="text-xl font-bold tracking-tighter">MyTube</span>
      </div>
      <div className="flex items-center space-x-4 text-gray-600 text-xl">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </header>
  );
};

export default Header;
