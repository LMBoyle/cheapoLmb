// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


// Functions ======================================================================================

function NotUser() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> You Need to Login to View This Page! </h1>
            <h1>
              <span role="img" aria-label="No Entry Emoji">
                ⛔ 
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export =========================================================================================

export default NotUser;
