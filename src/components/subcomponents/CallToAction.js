import React from 'react';

export default function CallToAction({ imageUrl, name, dish, price, description }) {
  const styleSpecials = {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'repeat(6,minmax(0, 1fr))',
    gridTemplateColumns: '80% 20%',
    backgroundColor: '#EDEFEE',
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
    alignItems: 'center'
  }

  const styleDishImg = {
    gridColumn: '1/ span 2',
    gridRow: '1/ span 2',
    width: '100%',
    maxWidth: '100%',
    height: '15vh',
    maxHeight:'15vh',
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
    alignSelf: 'start'
  }

  const styleDishTitle = {
    gridColumn: '1',
    gridRow: '3',
    fontSize: 'calc(0.8vw + 1vh)',
    color: 'black',
    padding: '0 10%',
  }

  const styleDishPrice = {
      gridColumn: '2',
      gridRow: '3',
      fontFamily: "'karla', sans-serif",
      fontSize:'calc(0.5vw + 0.6vh)',
      fontWeight: 'normal',
      color:'#EE9972'}

  const styleDishText = {
    gridColumn: 'span 2',
    gridRow: '4/span 5',
    padding: '0 10%',
    fontFamily: "'karla', sans-serif",
    fontSize:'calc(0.5vw + 0.7vh)',
    fontWeight: 'normal',
    color:'#333333',
  }

  const styleDishOrder ={
    gridColumn: 'span 2',
    gridRow: '6',
    fontFamily: "'karla', sans-serif",
    fontSize:'calc(0.5vw + 0.7vh)',
    padding: '0 10%',
  }

  return (
      <section style={styleSpecials} >
        <img src={imageUrl} alt={name} style={styleDishImg} />
          <h2 style={styleDishTitle}>
              {dish}
            </h2>
            <h6 style={styleDishPrice}>
              {price}
            </h6>
          <p
          style={styleDishText}>
              {description}
              </p>
          <h4
          style={styleDishOrder}>
            Order a delivery
          </h4>
      </section>
  )
}
