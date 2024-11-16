import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";



function NavigationBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">FurNest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="custom-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/Shop" className="custom-link">Shop</Nav.Link>

  
            <NavDropdown title="Adoption" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/DogAdoption">Dog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CatAdoption">Cat</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/GivePet">Give a Pet</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavigationBar;