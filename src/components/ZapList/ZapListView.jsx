import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import ZapFullView from '../Zaps/ZapFullView';
import NavigationBar from '../NavigationBar';
import Zaps from '../../constants/Zaps';
import '../../App.css';

const ZapListView = () => {
  return (
    <Container>
      <NavigationBar />
      {Object.values(Zaps).map(zap => (
        <ZapFullView
          key={zap.name}
          name={zap.name}
          components={zap.components}
          isOrderable={zap.isOrderable}
          description={zap.description}
          id={zap.id}
        />
      ))}
  );
};

export default ZapListView;
