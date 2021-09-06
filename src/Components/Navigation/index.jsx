import React from 'react'
import Footer from './Footer';
import Nav from './Nav';

const Navigation = ({children}) => {
  return (
   <>
   <Nav/>
    {children}
   <Footer/>
   </>
  )
}

export default Navigation;
