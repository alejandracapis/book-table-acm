import React from 'react';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import BookingPage from '../components/BookingPage';
import Chicago from '../components/subcomponents/Chicago';

export default function Main() {
  return (
    <main style={{justifyContent:'center', paddingBottom: '10%'}}>
      <BookingPage />
      <Specials />
      <Testimonials />
      <Chicago />
    </main>
  )
}
