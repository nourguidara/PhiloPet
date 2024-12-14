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
import "./NavigationBar.css"; 

function NavigationBar() {
    const { wishlist } = useWishlist();
    return (
        <>
 
                   {/* Sub-navbar section */}
                   <header className="header">
                <h1 className="logo">PhiloPet</h1>
                <input
                    type="text"
                    placeholder="Rechercher"
                    className="search-bar"
                />
                <div className="header-icons">
                <Button as={Link} to="/wishlist" variant="light" className="favorites">
                            <FaHeart style={{ color: 'red' }} /> {wishlist.length}
                        </Button>
                    <button className="cart-icon">🛒</button>
                    <Link to="/login">
                        <button className="login-icon">🔑</button>
                    </Link>
                    
                </div>

                

                
            </header>
       
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                {/* <Navbar.Brand as={Link} to="/">FurNest</Navbar.Brand> */}
                <Navbar.Brand as={Link} to="/" className="custom-brand">
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="custom-nav">
                        <Nav.Link as={Link} to="/" className="custom-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/shop" className="custom-link">Shop</Nav.Link>
                        
                        <NavDropdown title="Adoption" id="basic-nav-dropdown"  className="custom-dropdown">
                            <NavDropdown.Item as={Link} to="/dog-adoption">Dog</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/cat-adoption">Cat</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/give-pet">Give a Pet</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>

                        {/* Added Resources NavDropdown */}
                        <NavDropdown
                            title="Resources"
                            id="resources-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item
                                as={Link}
                                to="/tips"
                                className="custom-dropdown-item"
                            >
                                Tips
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/articles"
                                className="custom-dropdown-item"
                            >
                                Articles
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/about-us" className="custom-link">
                            About Us
                        </Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

               

        </>
    );
}

export default NavigationBar;
