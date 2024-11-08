import React from 'react';
import FooterText from '../components/subcomponents/FooterText';
import FooterNav from '../components/subcomponents/FooterNav';

export default function Footer() {
  const styleFooterSection = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    padding: '0 10% 2%'
  }

  const styleFooterLogo = {
    gridColumn: '1',
    height:'calc(5vw + 5vh)',
    maxHieght:'calc(5vw + 5vh)',
    width:'auto',
  }

  return (
    <footer style={styleFooterSection}>
      <img src={require('../components/images/largelogo.png')} alt='footer logo' style={styleFooterLogo} />
      <FooterNav
      titleNavFoot="Doormat Navigation"
      pathOne="/" navOne="Home"
      pathTwo="/about" navTwo="About"
      pathThree="/menu" navThree="Menu"
      pathFour="/reserve" navFour="Reservations"
      pathFive="/orderonline" navFive="Order Online"
      pathSix="/login" navSix="Login"/>
      <FooterText
      title="Contact"
      txtOne="Address"
      txtTwo="Phone Number"
      txtThree="Email"
      />
      <FooterText
      title="Social Media Links"
      txtOne="Facebook"
      txtTwo="Instagram"
      txtThree="Twitter"
      />
    </footer>
  )
}
