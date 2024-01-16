import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as S from "./Header.styled";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const GreenCartIcon = styled.div`
  font-size: 30px;
  color: #467edc;
  position: relative;
  display: inline-block;

  span {
    position: absolute;
    top: -4px;
    right: -4px;
    background-color: red;
    color: white;
    border-radius: 100%;
    padding: 6px;
    font-size: 12px;
  }
`;

const HeaderComponent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalQuantity = cart.length;

  return (
    <Navbar bg="light" data-bs-theme="light" style={{ padding: "0" }}>
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
          <GreenCartIcon>
            <span>{totalQuantity}</span>
            <i className="bi bi-cart"></i>
          </GreenCartIcon>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
