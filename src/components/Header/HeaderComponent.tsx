import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import * as S from "./Header.styled";
import "./HeaderStyle.css";

const HeaderComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" style={{ padding: "0" }}>
      <Container>
        <Nav id="drop-down-menu">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            <i className="fa-solid fa-house"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Features</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Reviews</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav id="navbar-left-menu">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Reviews</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">
          <S.NavbarLogo>Beauty.bd</S.NavbarLogo>
        </Navbar.Brand>
        <Nav.Link href="#features">
          <i className="fa-solid fa-cart-shopping" id="shopping-cart-btn"></i>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
