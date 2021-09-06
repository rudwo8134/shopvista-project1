import React from 'react'
import Logo from '../../assets/companylogo.png'
import styled from 'styled-components'


const Footercontainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    width: 150px;
    height: 30px;
  }

`

const Footer = () => {
  return (
    <Footercontainer>
      <img src={Logo} alt="Logo" />
      <span>
        All Copyright © {new Date().getFullYear()} ShipVista.com - Cheapest Shipping Rates for eCommerce Business
      </span>
    </Footercontainer>
  );
}

export default Footer
