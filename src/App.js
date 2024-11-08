import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';


import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
