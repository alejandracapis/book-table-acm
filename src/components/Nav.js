import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const styleLink = {
            color: 'black',
            fontWeight: 'bolder',
            fontFamily: '"karla", sans-serif',
    };

  return (
    <nav>
        <ul style={{listStyle:'none', display:'grid', gridTemplateColumns:'repeat(5, minmax(0, 1fr))', gap: '1%', textAlign:'center', justifyContent:'space-evenly' }}>
            <li>
                <Link to='/' style={styleLink}>Home</Link>
            </li>
            <li>
                <Link to='/booking' style={styleLink}>Book a table</Link>
            </li>
                <Link to='/specials' style={styleLink}>Menu</Link>
            <li>
                <Link to='/testimonials' style={styleLink}>Testimonials</Link>
            </li>
            <li>
                <Link to='/about' style={styleLink}>About</Link>
            </li>
        </ul>
    </nav>
  )
}
