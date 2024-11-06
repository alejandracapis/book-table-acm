import React from 'react';

export default function CustomersSay({rating, nameprofile, reviewtxt}) {
  const ratingHeader = {
      color: 'black',
      fontFamily: "'karla', sans-serif",
      fontSize: 'calc(0.5vw + 0.8vh)',
      fontWeight: 'bolder',
      alignSelf:'center'
  }

  return (
      <section style={{ display: 'grid', gridTemplateRows: '1fr 3fr 1fr', gridTemplateColumns: 'minmax(0,15vw)', backgroundColor: '#EDEFEE', padding:'10%'}}>
        <h4 style={ratingHeader}>{rating}</h4>
        <article style={{display: 'grid', gridAutoFlow: 'column', gap: '5%'}}>
          <img
          alt='img'
          style={{
            height: '100%',
            maxHeight: '100%',
            maxWidth: '50%',
            borderStyle: 'solid',
            borderWidth: '1px',
            backgroundColor: 'grey',
            opacity: '0.8',
            textAlign: 'center',
            }}/>
          <h4 style={ratingHeader}>{nameprofile}</h4>
        </article>
        <p style={{fontFamily: "'karla', sans-serif", fontSize: 'calc(0.5vw + 0.8vh)'}}>{reviewtxt}</p>
      </section>
  )
}
