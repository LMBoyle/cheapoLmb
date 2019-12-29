// Imports ========================================================================================

import React, { Component } from "react";
import Rotate from "react-reveal/Rotate";

import "./Pages.css"

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { CardHeader, CardImg, Card } from "../../components/Card"

// Images
const savingJars = require("../../assets/img/savingJars.jpg");
const friendsMoney = require("../../assets/img/friendsMoney.jpg")


// Functions ======================================================================================

class Welcome extends Component {
  

  render() {
    return (
      <div className="container my-0">
        <Card
          cardClass={"cardWrap"}
          styleCard={{minHeight: 1028}}
          styleBody={{padding: "0 0 50px 0"}}
        >
          <Row>
            <Col size="md-12">
              <Jumbotron
                style={{color: "#650D1B"}}
              >
                <h1> Welcome to Cheapo! </h1>
                <p> We strive to help you help your friends save money! </p>
              </Jumbotron>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col size="md-6">
                <Rotate top left>
                  <CardImg
                    src={savingJars}
                    alt="Jars full of change with labels for different saving goals"
                  />
                </Rotate>
              </Col>
              <Col size="md-6">
                <CardHeader
                  title="Save Money"
                  styleHeader={{backgroundColor: "#BF7E04"}}
                  styleCard={{textAlign: "center", top: "3rem"}}
                >
                  Save towards rent, vacation or treating yourself to something nice!
                </CardHeader>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <CardHeader
                  title="Connect With Friends"
                  styleHeader={{backgroundColor: "#BF7E04"}}
                  styleCard={{textAlign: "center", top: "7rem"}}
                >
                  See how close friends are to meeting their goals and cheer them on!
                </CardHeader>
              </Col>
              <Col size="md-6">
                <Rotate top right>
                  <CardImg
                    src={friendsMoney}
                    alt="Group of friends reaching for falling money"
                  />
                </Rotate>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  };
};

// Export =========================================================================================

export default Welcome;