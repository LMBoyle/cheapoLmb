// Imports ========================================================================================

import React, { Component } from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card } from "../../components/Card";
import { FormBtn, Input } from "../../components/Form";

// Other
import AUTH from '../../utils/AUTH';

// Functions ======================================================================================

class Profile extends Component {

  constructor(){
    super();

    this.state = {
      userId: '',
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  }

  // When page loads, load the goals
  componentDidMount() {
    this.loadUser();
  }

  // Request to load user
  loadUser = () => {
    AUTH.getUser()
      .then(res =>
        this.setState({ 
          userId: res.data.user._id,
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          username: res.data.user.username,
          password: '',
        })
      )
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    AUTH.updateUser(this.state.userId, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.loadUser())
      .catch(err => console.log(err));
  }

render(){
  return (
    <Container fluid>
      <Card
        cardClass={"cardWrap"}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1> Update User Profile! </h1>
            </Jumbotron>
          </Col>
        </Row>
      <Row>
        <Col size="md-12">            
            <Card title="user profile">
              <form style={{ marginTop: 10 }}>
                <label htmlFor="firstname"> First Name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <label htmlFor="lastname"> Last Name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <label htmlFor="username"> Username: </label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <label htmlFor="password"> Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.username && this.state.password)}
                  onClick={this.handleSubmit}
                >
                  Submit Changes!
                </FormBtn>
              </form>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
}
// Export =========================================================================================

export default Profile;
