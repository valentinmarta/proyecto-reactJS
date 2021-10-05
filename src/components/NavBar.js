import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  const numero = "0"

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Blue Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Tienda</Nav.Link>
          <Nav.Link href="#pricing">Nosotros</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <CartWidget Numero= {numero}/>
    </>
  )
}

export default NavBar

