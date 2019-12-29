// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card } from "../../components/Card";
import SpeechBubble from "../../components/SpeechBubble";

// Utils
import socialPosts from "../../utils/mockSocial"

var s = 0

// Functions ======================================================================================

function Dashboard() {
  console.log(socialPosts)
  return (
    <Container>
      <Card
        cardClass={"cardWrap"}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> Welcome to Cheapo! </h1>
              <p> Look at what your friends have been up to! </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            { socialPosts.map((post, i) => (
              (s===0 ? (
                s++,
                <SpeechBubble
                  bubbleSide={"sbR"}
                  btnSide={"btnL"}
                  key={i}
                >
                  {post.firstName + " " + post.msg + " " + post.goal}
                </SpeechBubble>
              ) : (
                s--,
                <SpeechBubble
                  bubbleSide={"sbL"}
                  btnSide={"btnR"}
                  key={i}
                >
                  {post.firstName + " " + post.msg + " " + post.goal}
                </SpeechBubble>
              ))
            ))}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}


// Export =========================================================================================

export default Dashboard;