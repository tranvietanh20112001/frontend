import { Container, Nav, Navbar } from "react-bootstrap";
import "./HeaderStyle.css";

const HeaderComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" className="navbar">
      <Container>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Review</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home"><p className="navbar-logo">Beauty.bd</p></Navbar.Brand>
        <Nav.Link href="#features">Features</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
