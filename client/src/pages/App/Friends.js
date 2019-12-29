// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card, CardImg } from "../../components/Card"
import Headshot from "../../components/Headshot"

// Utils
import friendsData from "../../utils/mockFriends"

// Images
const friends = require("../../assets/img/friends.jpg");

// Functions ======================================================================================

function Friends() {
  return (
    <Container>
      <Card
        cardClass={"cardWrap"}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <CardImg 
                src = {friends}
                alt = "friendsCast"
              />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          { friendsData.map((friend, i) => (
            < Headshot
              key={i} 
              img={friend.img}
              firstName={friend.firstName}
              lastName={friend.lastName}
            />
          ))}
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

// Export =========================================================================================

export default Friends;
