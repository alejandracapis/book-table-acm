import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const styleLink = {
            color: 'black',
            fontWeight: 'bolder',
            fontFamily: '"karla", sans-serif',
            fontSize: 'calc(0.5vw + 0.5vh)'
            };

  return (
    <nav>
        <ul style={{listStyle:'none', display:'grid', gridTemplateColumns:'repeat(6, minmax(0, 1fr))', gap: '2%', textAlign:'center', justifyContent:'space-evenly' }}>
            <li>
                <Link to='/' style={styleLink}>Home</Link>
            </li>
            <li>
                <Link to='/about' style={styleLink}>About</Link>
            </li>
                <Link to='/menu' style={styleLink}>Menu</Link>
            <li>
                <Link to='/reservations' style={styleLink}>Reservations</Link>
            </li>
            <li>
                <Link to='/orderonline' style={styleLink}>Order Online</Link>
            </li>
            <li>
                <Link to='/login' style={styleLink}>Login</Link>
            </li>
        </ul>
    </nav>
  )
}
