/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import styles from './NavigationBar.module.css';

const NavigationBar = props => {
  return (
    <div className="mt-1 mb-3">
      <Navbar expand="md">
        <Navbar.Brand href="#home">
          DevicoVentures
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Text>
              <Button
                className={styles.anchorSpacing}
                variant="link" 
                href="/zaps"
              >
                Governator
              </Button>
            </Navbar.Text> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
