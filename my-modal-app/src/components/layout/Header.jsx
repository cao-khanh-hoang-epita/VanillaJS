// src/components/layout/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-purple-400 text-2xl font-bold">🔥 Maxx</span>
      </div>
      <nav>
        <button className="text-white">Home</button>
      </nav>
    </header>
  );
};

export default Header;