import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const ExploreButton = () => (

  <Container>
    <Row className="justify-content-center py-2">
      <Button
        variant="primary"
        href="/zaps"
        className="shadow lift mr-1 my-2 py-3 font20 px-4"
      >
        Explore
          </Button>
    </Row>
  </Container>
);

export default ExploreButton;