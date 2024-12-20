import React from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from './WishlistContext';
import "./NavigationBar.css"; 
import { UserRole } from "./UserRole";
import { useNavigate } from "react-router-dom";



function NavigationBar() {
    const { wishlist } = useWishlist();

    const role = UserRole();
    const navigate=useNavigate()
    const handleSignOut = () => {
    if (window.confirm("Are you sure you want to SignOut")){
        localStorage.removeItem("token"); // Remove the token from local storage
        navigate("/"); // Navigate to the home page or login page
    }
    };

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
                   
                    <Link to="/login">
                        <button className="login-icon">🔑</button>
                    </Link>
                </div>
            </header>

            
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="custom-brand"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="custom-nav">

                        {role === 'admin' && (
                        <Nav.Link>
                         <NavLink as={Link} to="/admindashboard" className="custom-link">
                            Messages
                            </NavLink>
                             </Nav.Link>
                            )}

                        {role === 'user' && (
                             <Nav.Link className="navUser">  
                            <NavLink as={Link} to="/" className="custom-link">Home</NavLink>
                            
                            {/* Shop Dropdown */}
                            <NavDropdown title="Shop" id="shop-nav-dropdown" className="custom-dropdown">
                                {/* Nested Cat Dropdown */}
                                <NavDropdown title="Cats" id="cat-dropdown" >
                                    <NavDropdown.Item as={Link} to="/shop/cat/accessories" >
                                        Cat Accessories
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/shop/cat/nutrition" >
                                        Cat Nutrition
                                    </NavDropdown.Item>
                                </NavDropdown>
                                
                                {/* Nested Dog Dropdown */}
                                <NavDropdown title="Dogs" id="dog-dropdown" className="nested-dropdown">
                                    <NavDropdown.Item as={Link} to="/shop/dog/accessories" >
                                        Dog Accessories
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/shop/dog/nutrition" >
                                        Dog Nutrition
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>

                            {/* Adoption Dropdown */}
                            <NavDropdown title="Adoption" id="adoption-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item as={Link} to="/dog-adoption">Dog</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/cat-adoption">Cat</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/give-pet">Give a Pet</NavDropdown.Item>
                            </NavDropdown>

                            {/* Resources Dropdown */}
                            <NavDropdown title="Resources" id="resources-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item as={Link} to="/tips" className="custom-dropdown-item">
                                    Tips
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/articles" className="custom-dropdown-item">
                                    Articles
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavLink as={Link} to="/about-us" className="custom-link">
                                About Us
                            </NavLink>

                            </Nav.Link> 
                        )}

                        <Nav.Link>
                        {role ? (
                        <Link
                        to="/"
                        onClick={handleSignOut}
                        style={{
                        
                             borderRadius:" 10px",
                             color:"#ce8761" ,
                             fontWeight: "700",

                        }}
                        >
                        Sign Out
                        </Link>
                        ) : (
                        <Link
                        to="/signUp"
                        style={{
                            borderRadius:" 10px",
                            color:"#ce8761" ,
                            fontWeight: "700",
                        }}
                        >
                        SignUp/In
                        </Link>
                        )}
                        </Nav.Link>
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
