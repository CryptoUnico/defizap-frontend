import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SaveTime from '../../assets/save-time.svg';
import SaveGas from '../../assets/save-gas.svg';
import NonCustodial from '../../assets/non-custodial.svg';

const WhyUseGovernator = () => (
  <Container>
    <Row className="justify-content-center text-center">
      <Col sm md lg>
        <img src={SaveTime} width="94px" alt="Save Time" />
        <h5>Save Time</h5>
        <p>
          Governator is a system of smart contracts - Governates - that deploys
          WETH across multiple DeFi protocols in one transaction, saving your time.
        </p>
      </Col>
      
      <Col sm md lg>
        <img src={NonCustodial} width="90px" alt="Save Time" />
        <h5>Non Custodial</h5>
        <p>
        When you use Governator, you mint & receive the same liquidity/position
         tracking tokens as when separately using Uniswap, Compound, Maker, Kyber, 
         etc. on your own.
          <br />
          <a
            href="https://github.com/CryptoUnico/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Review smart contract code.
          </a>
        </p>
      </Col>

      <Col sm md lg>
        <img src={SaveGas} width="120px" alt="Save Time" />
        <h5>Easy Access</h5>
        <p>
        Governating injects ETH into financial protocols built on top of Ethereum, 
        furthering user adoption.
          <br />
        </p>
      </Col>
    </Row>
  </Container>
);

export default WhyUseGovernator;
