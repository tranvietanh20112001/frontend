import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import * as S from "./Header.styled";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import './HeaderStyle.css'

const GreenCartIcon = styled.div`
  font-size: 30px;
  color: #467edc;
  position: relative;
  display: inline-block;

  span {
    top: 5px;
    text-align: center;
    position: absolute;
    right: -4px;
    background-color: red;
    color: white;
    border-radius: 100%;
    font-size: 10px;
    width: 15px;
    height: 15px;
  }
`;

const HeaderComponent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalQuantity = cart.length;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" data-bs-theme="light" style={{ padding: "0" }}>
      <Container>
      <Nav id="side-bar-menu">
          <Button variant="primary" onClick={handleShow} id="navbar-menu-btn">
            <i className="fa-solid fa-bars"></i>
          </Button>

          <Offcanvas id="side-bar-menu-container" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <h1>Menu</h1>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavLink to="/home"><h2>Home</h2></NavLink>
              <NavLink to="/products"><h2>Products</h2></NavLink>
              <NavLink to="/review"><h2>Review</h2></NavLink>
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
        <Nav id="navbar-left">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/review">Review</NavLink>
        </Nav>
        <Navbar.Brand as={Link} to={"/home"}>
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
