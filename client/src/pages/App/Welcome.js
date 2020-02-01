// Imports ========================================================================================

import React, { Component } from 'react';
import Rotate from 'react-reveal/Rotate';

import './Pages.css';

// Components
import { Col, Row, Container } from '../../components/Grid';

// Images
const savingJars = require('../../assets/img/savingJars.jpg');
const friendsMoney = require('../../assets/img/friendsMoney.jpg');


// Functions ======================================================================================

class Welcome extends Component {
  

  render() {
    return (
      <main className='my-0'>
        <Container>

          <header>
            <Row>
              <Col size='md-12'>
                We strive to help you help your friends save money! 
              </Col>
            </Row>
          </header>

          <section>
            <Row>
              {/* Save Money */}
              <Col size='md-4'>
                <Rotate top left>
                  <img src={savingJars} alt='Jars full of change with labels for different saving goals'/>
                </Rotate>
                <h2> Save Money </h2>
                <p> Save towards rent, vacation or treating yourself to something nice! </p>
              </Col>

              {/* Connect With Friends */}
              <Col size='md-4'>
                <Rotate top left>
                  <img src={friendsMoney} alt='Group of friends reaching for falling money'/>
                </Rotate>
                <h2> Connect With Friends </h2>
                <p> See how close friends are to meeting their goals and cheer them on! </p>
              </Col>

              {/* Learn Good Habits */}
              <Col size='md-4'>
                <Rotate top left>
                  <img src={friendsMoney} alt='Group of friends reaching for falling money'/>
                </Rotate>
                <h2> Learn Good Habits </h2>
                <p> Create long lasting habits </p>
              </Col>
            </Row>
          </section>

        </Container>
      </main>
    );
  };
};

// Export =========================================================================================

export default Welcome;