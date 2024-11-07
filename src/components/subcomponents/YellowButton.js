import React from 'react';

export default function YellowButton() {
    const styleButton = {
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


  return (
    <button type='button' style={styleButton}>
        {buttontxt}
    </button>
  );
};
