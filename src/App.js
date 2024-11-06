import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BookingPage from "./components/BookingPage";
import Testimonials from './components/Testimonials';
import About from './components/About';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Specials from './components/Specials';

import './App.css';
import Main from './pages/Main';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
