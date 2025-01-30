// src/App.jsx
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;