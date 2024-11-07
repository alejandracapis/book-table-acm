import React from 'react';
import YellowButton from './subcomponents/YellowButton';

export default function BookingPage() {
  const styleMainHeader = {
    color: '#F4CE14',
    fontFamily: "'Markazi', sans-serif",
    fontSize: 'calc(1vw + 1vh)',
    textAlign:'start'
  }
  const styleSecondHeader = {
    color: '#EDEFEE',
    fontFamily: "'Markazi', sans-serif",
    fontSize: 'calc(0.8vw + 0.8vh)',
    textAlign:'start'
  }

  const styleMainText = {
    color: '#EDEFEE',
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.5vw + 0.5vh)',
    textAlign:'start'
  }

  return (
    <section>
      <h1 style={styleMainHeader}>Little Lemon</h1>
      <h2 style={styleSecondHeader}>Chicago</h2>
      <p style={styleMainText}>We are a family owned
        Mediterranean restaurant,
        focused on traditional
        recipies served within a modern
        twist.
      </p>
      <YellowButton
        buttontxt="Reserve a table" />
    </section>
    );
};
