import React from 'react'
import baslik from '../../images/iteration-1-images/logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const HeaderBg = styled.div`
  background-color: #CE2829;
  text-align: center;
  padding: 50px 0;
  color: white;


`
const BaslikImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
`;





const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-right: 20%;
  gap: 10px;
  font-size: 14px;
 margin-bottom: -18px;

  a {
    text-decoration: none;
    color: #fff;

    &.active {
      font-weight: bold;
      color: #fff;
      text-decoration: underline;
    }
  }
`;


function Header({showNav}) {
  return (
    
    <HeaderBg>
    <BaslikImage src={baslik} alt="baslik" />
    {showNav && (
        <Nav>
          <NavLink exact to="/homepage" activeClassName="active">Anasayfa - </NavLink>
          <NavLink exact to="/order" activeClassName="active">Sipariş Oluştur</NavLink>
        </Nav>
      )}
   
    

    </HeaderBg>
  
  )
}

export default Header;