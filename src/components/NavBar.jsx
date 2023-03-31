import logo from "../assets/img/logo.png";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar navbar-expand-lg dekstop-only" expand>
      <img src={logo} alt="#" />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Our Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Why Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Testimonial</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">FAQ</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
