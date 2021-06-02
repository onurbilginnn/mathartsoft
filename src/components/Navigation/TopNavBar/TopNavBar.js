import React from 'react';
import {
  Navbar,
  NavDropdown,
  Nav
} from 'react-bootstrap';

import NavigationItem from '../NavigationItem/NavigationItem';

import MainLogoColorSVG from '../../SVGs/MainLogoColorSVG';

import './topNavBar.css';

const TopNavBar = (props) => {
 

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Brand className="ml-5">
  <MainLogoColorSVG />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav >
      <NavigationItem classes="mt-2 mr-3"  link="/" exact >Home</NavigationItem>
      <NavDropdown className="mr-3" title="Math" id="basic-nav-dropdown">
        <NavigationItem classes="ml-4" link="/math/prime">Prime Numbers</NavigationItem>
        <NavDropdown.Divider />
        <NavigationItem classes="ml-4"  link="/math">Math</NavigationItem>
      </NavDropdown>
      <NavDropdown className="mr-3" title="Art" id="basic-nav-dropdown">
        <NavigationItem classes="ml-4" link="/art/digital">Digital Drawings</NavigationItem>
        {/* <NavigationItem classes="ml-4" link="/art/hand">Hand Drawings</NavigationItem> */}
        <NavigationItem classes="ml-4" link="/under_construction">Hand Drawings</NavigationItem>
        {/* <NavigationItem classes="ml-4"  link="/art/hand-to-digital">Hand to Digital</NavigationItem> */}
        <NavigationItem classes="ml-4" link="/under_construction">Hand to Digital</NavigationItem>
        <NavDropdown.Divider />
        <NavigationItem classes="ml-4"  link="/art">Art</NavigationItem>
      </NavDropdown>
      <NavigationItem classes="mt-2" link="/contact">Contact</NavigationItem>

    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default TopNavBar;