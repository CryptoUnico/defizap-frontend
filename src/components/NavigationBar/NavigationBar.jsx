/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import styles from './NavigationBar.module.css';

const NavigationBar = props => {
  return (
    <div className="mt-1 mb-3">
      <Navbar expand="md">
        <Navbar.Brand href="/"> DevicoVentures </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/apps">Apps</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;