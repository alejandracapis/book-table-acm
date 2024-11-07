import React from 'react';

export default function BookingPage() {
  const styleMainSection = {
    backgroundColor: '#495E57',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 50%))',
    gridTemplateRows: 'repeat(4, minmax(0, auto))',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'start',
    padding: '0 10%'
  }

  const styleMainHeader = {
    gridColumn: '1',
    gridRow: '1',
    color: '#F4CE14',
    fontFamily: "'Markazi', sans-serif",
    fontSize: 'calc(1vw + 1.5vh)'
  }
  const styleSecondHeader = {
    gridColumn: '1',
    gridRow: '2',
    color: '#EDEFEE',
    fontFamily: "'Markazi', sans-serif",
    fontSize: 'calc(0.8vw + 1.2vh)',
}

  const styleMainText = {
    gridColumn: '1',
    gridRow: '',
    color: '#EDEFEE',
    fontFamily: "'karla', sans-serif",
    fontSize: 'calc(0.5vw + 0.8vh)',
    textAlign:'start',
    paddingRight: '10%'
  }

  const styleMainImg = {
    gridColumn:'2',
    gridRow:'span 4',
    alignSelf: 'end',
    justifySelf: 'center',
    borderRadius: '3vh'
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
      <img src={require('./images/waiter.jpg')} alt='main img'
        style={styleMainImg}/>
    </section>
    );
};
