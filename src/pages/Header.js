import React from 'react';
import Nav from '../components/Nav';

export default function Header() {
  return (
    <header style={{  display:'grid', gridAutoFlow: 'column', alignItems:'center', justifyContent:'space-around', maxHeight:'10vh', margin: '1rem'}}>
        <img src={require('../components/images/logo.jpg')} alt='logo' style={{maxWidth: '10vw'}} />
        <Nav />
    </header>
  )
}
