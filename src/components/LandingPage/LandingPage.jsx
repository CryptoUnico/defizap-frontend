import React from 'react';
import Container from 'react-bootstrap/Container';

import NavigationBar from '../NavigationBar';
import WhyUseGovernator from './WhyUseGovernator';
import Hero from './Hero';

const LandingPage = () => (
  <>
    <Container>
      <NavigationBar isLandingPage />
      <Hero />
      <br /> <br /> <br />
      <WhyUseGovernator />
      <br /> <br /> <br />
      <div className="text-center py-1 mb-2">
        <div className="text-muted">
        </div>
      </div>
    </Container>
  </>
);

export default LandingPage;