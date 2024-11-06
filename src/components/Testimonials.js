import React from 'react';
import CustomersSay from './subcomponents/CustomersSay';

export default function Testimonials() {
  return (
      <section
      style={{
        display: 'grid',
        gridTemplateRows: 'minmax(0,1fr) minmax(0,2fr)',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gap: '7%',
        justifyContent: 'center',
        padding:'5% 10%',
        backgroundColor: '#495E57',
        width:'100%' }}>
        <h1 style={{ gridColumnEnd: 'span 4',textAlign: 'center', fontSize: '36px', fontWeight: 'lighter', marginBottom: '2%' }}>Testimonials</h1>
        <CustomersSay
          rating="Rating"
          nameprofile="Name"
          reviewtxt="Review text"
        />
        <CustomersSay
          rating="Rating"
          nameprofile="Name"
          reviewtxt="Review text" />
        <CustomersSay
          rating="Rating"
          nameprofile="Name"
          reviewtxt="Review text" />
        <CustomersSay
          rating="Rating"
          nameprofile="Name"
          reviewtxt="Review text" />
      </section>
  )
}
