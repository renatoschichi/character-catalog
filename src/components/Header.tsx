import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #24292e;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  color: #fff;
  padding: 10px;
  text-decoration: none;

  &.active {
    background-color: #fff;
    border-radius: 5px;
    color: #24292e;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Catálogo de Rick e Morty</Logo>
      <Nav>
        <NavItem to="/" end>
          Início
        </NavItem>
        <NavItem to="/favoritos" end>
          Favoritos
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;