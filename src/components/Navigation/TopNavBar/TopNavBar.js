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
  <Navbar.Brand >
  <MainLogoColorSVG height="15mm" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav >
      <Navbar.Text  ><NavigationItem link="/" exact >Home</NavigationItem></Navbar.Text>
      <NavDropdown style={{textAlign:'center'}} title="Math" id="basic-nav-dropdown">
      <Navbar.Text className="ml-3">
      <NavigationItem  link="/math/prime">Prime Numbers</NavigationItem></Navbar.Text> 
        <NavDropdown.Divider />
        <Navbar.Text className="ml-3">
        <NavigationItem  link="/math">Math</NavigationItem>
        </Navbar.Text>
      </NavDropdown>
      <NavDropdown style={{alignItems: 'center'}} title="Art" id="basic-nav-dropdown">
      <Navbar.Text className="ml-3" >
        <NavigationItem  link="/art/digital">Digital Drawings</NavigationItem>
      </Navbar.Text>
        {/* <NavigationItem classes="ml-4" link="/art/hand">Hand Drawings</NavigationItem> */}
        <Navbar.Text className="ml-3">
        <NavigationItem  link="/under_construction">Hand Drawings</NavigationItem>
        </Navbar.Text>
        {/* <NavigationItem classes="ml-4"  link="/art/hand-to-digital">Hand to Digital</NavigationItem> */}
        <Navbar.Text className="ml-3">
        <NavigationItem  link="/under_construction">Hand to Digital</NavigationItem>
        </Navbar.Text>
        <NavDropdown.Divider />
        <Navbar.Text className="ml-3">
        <NavigationItem   link="/art">Art</NavigationItem>
        </Navbar.Text>
      </NavDropdown>
      <Navbar.Text>
      <NavigationItem link="/contact">Contact</NavigationItem>
      </Navbar.Text>
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