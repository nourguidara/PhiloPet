import React from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from './WishlistContext';

function NavigationBar() {
    const { wishlist } = useWishlist();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">FurNest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="custom-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/shop" className="custom-link">Shop</Nav.Link>
                        
                        <NavDropdown title="Adoption" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/dog-adoption">Dog</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/cat-adoption">Cat</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/give-pet">Give a Pet</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>

                        <Button as={Link} to="/wishlist" variant="light">
        <FaHeart style={{ color: 'red' }} /> {wishlist.length}
      </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
