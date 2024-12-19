import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './AdminNavigationBar.css'

const AdminNavigationBar = () => {
  return (<>
    <header className="header">
    <h1 className="logo">PhiloPet</h1>
    <input
        type="text"
        placeholder="Rechercher"
        className="search-bar"
    />
    <div className="header-icons">
       
       
        <Link to="/login">
            <button className="login-icon">🔑</button>
        </Link>
    </div>
</header>
<Navbar expand="lg" className="custom-navbar">
                <Container>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="custom-nav">
                            <Nav.Link as={Link} to="/admindashboard" className="custom-link">Home</Nav.Link>
                            

                            <Nav.Link as={Link} to="/admin/orders" className="custom-link">
                                Orders
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  );
};

export default AdminNavigationBar;
