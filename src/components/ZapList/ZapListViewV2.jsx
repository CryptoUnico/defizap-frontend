import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import '../../App.css';
import Donut from '../PercentageDoughnut';
import NavigationBar from '../NavigationBar';
import BuyButtonContainer from '../BuyButton/BuyButtonContainer';

const Zap = props => {
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <Col xs={12} md={4} lg={3} key={props.name} className="m-4 pt-3 bg-white">
      <Col className="align-text-center">
        <Donut data={props} />
      </Col>
      <Col>
        {props.isOrderable ? null : (
          <>
            <h4>This Zap is still under development.</h4>
            <h4>
              In the meantime, check out available Zaps <a href="/governate">here</a>
              .
            </h4>
          </>
        )}
        <Row className="text-center pt-2">
          <Col className="text-sm-center">
            {props.oneClickAccessTo ? (
              <span>
                <h6 style={{ fontSize: '0.8em' }}>1-CLICK ACCESS TO:</h6>
                <h6>
                  {props.oneClickAccessTo.map((access, index) => (
                    <Row key={access.text} className="justify-content-center">
                      <a
                        href={
                          access.url
                            ? access.url
                            : props.hasReturnsChart
                              ? `https://pools.fyi/#/returns/${props.tokenAddress}`
                              : null
                        }
                        key={access.text}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Badge
                          style={{ backgroundColor: access.color }}
                          variant="primary"
                          className={index === 0 ? 'beforePill' : 'afterPill'}
                        >
                          {access.text}
                        </Badge>
                      </a>
                    </Row>
                  ))}
                  {props.oneClickAccessTo.length === 1 ? (
                    <div className="my-3 pb-2" />
                  ) : null}
                </h6>
              </span>
            ) : (
                ''
              )}
            {props.metamaskInteractionsSaved ? (
              <span>
                <h6 style={{ fontSize: '0.8em' }}>
                  WALLET INTERACTIONS SAVED: <br />
                  <h6>
                    <b style={{ fontSize: '1.8em' }}>
                      {props.metamaskInteractionsSaved.map(
                        interactions => interactions.saved
                      )}
                    </b>
                  </h6>
                </h6>
              </span>
            ) : null}
            {props.stats ? (
              <div>
                <span>
                  <h6 style={{ fontSize: '0.8em' }}>
                  ESTIMATED TIME SAVED PER USE:

                  <h6>
                      <b style={{ fontSize: '1.8em' }}>
                        {(((props.metamaskInteractionsSaved[0].saved + 1) * 75) *1.40) /60}{' '}
                        Minutes
                    </b>
                    </h6>
                  </h6>
                  <h6 style={{ fontSize: '0.8em' }}>
                    DEPLOYED THROUGH THIS ZAP:
                <h6>
                      <b style={{ fontSize: '1.8em' }}>
                        {props.stats.volumeETH
                          ? numberWithCommas(props.stats.volumeETH.toFixed(0))
                          : '-'}{' '}
                        ETH
                  </b>

                      <p
                        className="pt-1"
                        style={{ fontSize: '0.6em', opacity: '70%' }}
                      >
                        Updated {new Date(props.stats.updated).toLocaleString()}
                      </p>
                    </h6>
                  </h6>
                </span>
              </div>
            ) : null}
          </Col>
        </Row>
      </Col>
      <Row className="justify-content-center mt-3 mb-2 px-4">
        <BuyButtonContainer {...props} block />
      </Row>
    </Col>
  );
};

const ZapListView = props => {
  const { data } = props;

  //  Disabled Sorting for a bit until we have a neater implementation in place
  // TODO: ENABLE SORTING OF ZAPS by Volume.
  // data.sort((a, b) => {
  //   if (a.stats && b.stats)
  //     return b.stats.volumeETH - a.stats.volumeETH
  // })
  // data.forEach((zap, index) =>{
  //   if (zap.new){
  //     data.splice(index, 1)
  //     data.unshift(zap)
  //   }
  // });
  return (
    <Container>
      <NavigationBar />
      <Row className="d-flex justify-content-around">
        {data.filter(zap => zap.isOrderable).map(zap => Zap(zap))}
      </Row>
      <hr />
      <br />
      <br />
    </Container>
  );
};

export default ZapListView;

export { Zap };
