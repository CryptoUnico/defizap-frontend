import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import styles from './LandingPage.module.css';
import NavigationBar from '../NavigationBar';
import WhyUseDeFiZap from './WhyUseDeFiZap';
import AvailableZaps from './AvailableZapsView';
import ExploreZapsButton from './ExploreZapsButton';
import Hero from './Hero';
import Footer from '../Footer';

const LandingPage = () => (
  <>
    <Container>
      <NavigationBar isLandingPage />
      <Hero />
      <br /> <br /> <br />
      <WhyUseDeFiZap />
      <Footer />
      <div className="text-center py-1 mb-2">
        <div className="text-muted">
        </div>
      </div>
    </Container>
  </>
);

export default LandingPage;
