import React from 'react';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import BookingPage from '../components/BookingPage';

export default function Main() {
  return (
    <main style={{justifyContent:'center'}}>
      <BookingPage />
      <Specials />
      <Testimonials />
    </main>
  )
}
