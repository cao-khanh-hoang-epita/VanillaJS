// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default Layout;