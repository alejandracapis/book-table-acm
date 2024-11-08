import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function Pages(){
  return (
    <Routes>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
  )
}
