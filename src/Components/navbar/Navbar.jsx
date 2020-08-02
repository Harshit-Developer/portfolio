import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";

import Harshit from "../../assets/icons/Harshit_2.png";
import "./Navbar.style.css";
const MyNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar bg="dark" expand="md" expanded={open} sticky="top">
        <Navbar.Brand href="#home" className="ml-2">
          <img
            alt="Harshit"
            src={Harshit}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-color"
          onClick={() => setOpen(!open)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="text-color">
          <Nav className="ml-auto nav-link">
            <NavLink
              onClick={() => setOpen(!open)}
              className="text-color p-2 mr-2"
              smooth
              to="/#home"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="text-color p-2 mr-2"
              smooth
              to="/#about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="text-color p-2 mr-2"
              smooth
              to="/#skills"
            >
              Skills
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="text-color p-2 mr-2"
              smooth
              to="/#experience"
            >
              Experience
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="text-color p-2 mr-2"
              smooth
              to="/#projects"
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="text-color p-2 mr-2"
              smooth
              to="/#contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
