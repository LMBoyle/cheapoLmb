// Imports ========================================================================================

import React, { Component } from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card, CardImg } from "../../components/Card"
import Headshot from "../../components/Headshot"

// Utils
import friendsData from "../../utils/mockFriends"
import AUTH from '../../utils/AUTH';
import friendsAPI from '../../utils/friendsAPI'

// Images
const friends = require("../../assets/img/friends.jpg");

// Functions ======================================================================================

class Friends extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      friends: []
    }
  }

  // When page loads, load users and friends
  componentDidMount() {
    this.loadUser();
    this.getFriends();
  }

  // Request to load user
  loadUser = () => {
    AUTH.getUser()
      .then(res =>
        this.setState({ 
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
        })
      )
      .catch(err => console.log(err));
  };

  // Request to get other users
  getFriends = () => {
    friendsAPI.getFriends()
      .then(res =>
        this.setState({ 
          friends: res.data.users
        })
      )
      .catch(err => console.log(err));
  };

  render() {
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
            { this.state.friends.map((friend, i) => (
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
  };
}

// Export =========================================================================================

export default Friends;
