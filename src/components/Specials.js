import React from 'react';
import CallToAction from './subcomponents/CallToAction';

export default function Specials() {
  const yellowButton = {
    backgroundColor: '#F4CE14',
    border: 'none',
    borderRadius: '1vh',
    textAlign: 'center',
    justifySelf: 'end',
    fontFamily: '"karla", sans-serif',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 'calc(0.7vw + 0.5vh)',
    width: '10vw',
    height: '5vh',
    gridRow: '1',
    gridColumn:'3'
  }

  const styleSection = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0,1fr)',
    gridTemplateRows: '10% 80%',
    alignItems: 'start',
    margin: '5% 20%',
    height: '100%',
    maxHeight:'100%'
  }

  return (
    <section
    style={styleSection}>
        <h2 style={{ gridRow:'1', gridColumn:'span 2', fontSize: 'calc(1vw + 1.5vh' }}>
          This weeks specials!
        </h2>
        <button type='button' style={yellowButton}>
          Order Online
        </button>
        <CallToAction
        style ={{gridRow: '2', gridColumn: '1'}}
          imageUrl={require("./images/greek.jpg")} name="Greek Salad"
          dish="Greek Salad"
          price="$ 12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <CallToAction
        style ={{gridRow: '2', gridColumn: '2'}}
          imageUrl={require("./images/bruchetta.jpg")} name="Bruchetta"
          dish="Bruchetta"
          price="$ 5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <CallToAction
        style ={{gridRow: '2', gridColumn: '3'}}
          imageUrl={require("./images/lemon_dessert.jpg")} name="Lemon Dessert"
          dish="Lemon Dessert"
          price="$ 5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
    </section>
  )
}
