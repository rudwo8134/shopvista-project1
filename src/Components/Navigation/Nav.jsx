import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Logo file. this logo has the copyright by SHIPVISTA
import Logo from '../../assets/companylogo.png';


const TextCss = css`
  font-weight: 500;
  font-size: 1rem;
  color: #121212;
  text-decoration: none;
  text-transform: uppercase;
`;

const Navcontainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
`;
const NavLogo = styled.img`
  width:200px;
  height:50px;
  cursor:pointer;
`;
const NavLinkcontainer = styled.nav``;
const NavLinkListContainer = styled.ul``;
const NavLinkList = styled.li`
  ${TextCss};
  list-style: none;
  display: inline-block;
  padding: 0 20px
`;
const NavLink = styled(Link)`
  ${TextCss}
  transition: all 0.3s ease 0s;
  &:hover{
    color:#18d26e
  }
`;

const WatchButton = styled(Link)`
  padding: 9px 25px;
  background-color: rgba(24, 210, 110, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  font-weight:500;
  color: #f2f2f2;
  &:hover {
    background-color: black;
    color: rgba(24, 210, 110, 1);
  }
`;





const LinkList = [
  {
    Name: 'Info',
    path: '/info',
  },
  {
    Name: 'Company',
    path: '/company',
  },
  {
    Name: 'Plants',
    path: '/plants',
  },
];


const Nav = () => {
  return (
    <Navcontainer>
      <NavLogo src={Logo}/>
      <NavLinkcontainer>
        <NavLinkListContainer>
          {LinkList.map((link,index)=>{
            return(
              <NavLinkList key={index}>
                <NavLink to={link.path}>{link.Name}</NavLink>
              </NavLinkList>
            )
          })}
        </NavLinkListContainer>
      </NavLinkcontainer>
      <WatchButton>
          DashBoard
      </WatchButton>
    </Navcontainer>
  )
}

export default Nav
