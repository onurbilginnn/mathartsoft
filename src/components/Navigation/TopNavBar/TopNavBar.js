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
  <Navbar.Brand href="#home" className="ml-5">
  <MainLogoColorSVG />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav >
      <NavigationItem classes="mt-2 mr-3"  link="/" exact >Home</NavigationItem>
      <NavigationItem classes="mt-2 mr-3" link="/about">About</NavigationItem>
      <NavigationItem classes="mt-2 mr-3" link="/plugins">Plugins</NavigationItem>
      <NavDropdown className="mr-3" title="Services" id="basic-nav-dropdown">
        <NavigationItem classes="ml-4" link="/finance">Finance</NavigationItem>
        <NavigationItem classes="ml-4" link="/inventory">Inventory</NavigationItem>
        <NavDropdown.Divider />
        <NavigationItem classes="ml-4"  link="/services">All Services</NavigationItem>
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