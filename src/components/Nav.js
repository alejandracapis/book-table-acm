import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/booking'>Book a table</Link>
            </li>
                <Link to='/specials'>Menu</Link>
            <li>
                <Link to='/testimonials'>Testimonials</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </div>
  )
}
