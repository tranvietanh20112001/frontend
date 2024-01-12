import { Container, Nav, Navbar } from "react-bootstrap";
import * as S from './Header.styled';

const HeaderComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" style={{padding:"0"}}>
      <Container>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Review</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home"><S.NavbarLogo>Beauty.bd</S.NavbarLogo></Navbar.Brand>
        <Nav.Link href="#features">Features</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
