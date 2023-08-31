import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;
`;

const Logo = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
`;

const Navbar = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  font-size: 18px;
`;

const Header = ({ navigateToHome }) => (
  <HeaderContainer>
    <Logo onClick={navigateToHome}>Logo</Logo>
    <Navbar>
      <NavItem>About us</NavItem>
      <NavItem>Self Awareness test</NavItem>
      <NavItem>Blog</NavItem>
    </Navbar>
  </HeaderContainer>
);

export default Header;
