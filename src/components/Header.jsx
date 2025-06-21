import React from 'react'
import baslik from '../../images/iteration-1-images/logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const BaslikImage = styled.img`
  display: block;
  margin: 40px auto;
`;

const HeaderBg = styled.div`
  background-color: #CE2829;
  display: flex;
  

`



const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0px;
  margin-left: 20px ;

  a {
    text-decoration: none;
    color: #333;

    &.active {
      font-weight: bold;
      color: black;
    }
  }
`


function Header({showNav}) {
  return (
    
    <HeaderBg>
    
    {showNav && (
        <Nav>
          <NavLink exact to="/homepage" activeClassName="active">Anasayfa</NavLink>
          <NavLink exact to="/order" activeClassName="active">Sipariş Oluştur</NavLink>
        </Nav>
      )}
   
    <BaslikImage src={baslik} alt="baslik" />

    </HeaderBg>
  
  )
}

export default Header;