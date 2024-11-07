import React from 'react';
import YellowButton from './subcomponents/YellowButton';

export default function BookingPage() {
  const styleMainSection = {
    backgroundColor: '495E57',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(4, minmax(0, auto))'
  }

  const styleMainHeader = {
    gridColumn: '1',
    gridRow: '1',
    color: '#F4CE14',
    fontFamily: "'Markazi', sans-serif",
    fontSize: 'calc(1vw + 1vh)',
    textAlign:'start'
  }
  const styleSecondHeader = {
    gridColumn: '1',
    gridRow: '1',
    color: '#EDEFEE',
    fontFamily: "'Markazi', sans-serif",
    fontSize: 'calc(0.8vw + 0.8vh)',
    textAlign:'start'
  }

  const styleMainText = {
    gridColumn: '1',
    gridRow: '2',
    color: '#EDEFEE',
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.5vw + 0.5vh)',
    textAlign:'start'
  }

  const styleMainImg = {
    gridColumn:'2',
    gridRow:'span 4'
  }

  return (
    <section style={styleMainSection}>
      <h1 style={styleMainHeader}>Little Lemon</h1>
      <h2 style={styleSecondHeader}>Chicago</h2>
      <p style={styleMainText}>We are a family owned
        Mediterranean restaurant,
        focused on traditional
        recipies served within a modern
        twist.
      </p>
      <YellowButton
      style={{
        gridColumn: '1',
        gridRow: '3'}}
        BtnTxt="Reserve a table"
        />
        <img src={require('./images/waiter.jpg')} alt='main img' 
        style={styleMainImg}/>
    </section>
    );
};
