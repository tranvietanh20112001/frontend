import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import * as S from './Header.styled';
import { NavLink } from 'react-router-dom';

const GreenCartIcon = styled.i`
  font-size: 20px;
  color: #467edc;
`;

const HeaderComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" style={{ padding: '0' }}>
      <Container>
        <Nav>
          <NavLink to="#home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="#pricing">Review</NavLink>
        </Nav>
        <Navbar.Brand href="#home">
          <S.NavbarLogo>Beauty.bd</S.NavbarLogo>
        </Navbar.Brand>
        <NavLink to="/cart">
          <GreenCartIcon className="bi bi-cart"></GreenCartIcon>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
