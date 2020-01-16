import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar(props) {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/search">Saved</Nav.Link>
        </Navbar>
    )
}

export default AppNavbar;