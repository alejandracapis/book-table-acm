import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';

import './App.css';
import Main from './pages/Main';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="#" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
