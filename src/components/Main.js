import React from 'react';
import { Route, Routes } from 'react-router-dom';


export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/testimonials" element={<CustomersSay />}></Route>
        <Route path="/about" element={<Chicago />}></Route>
      </Routes>
    </div>
  )
}
