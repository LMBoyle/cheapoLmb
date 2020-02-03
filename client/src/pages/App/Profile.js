// =========================================== Imports  ===========================================

import React, { Component } from 'react';

// Components
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import { Card } from '../../components/Card';
import { Input } from '../../components/Form';
import Btn from '../../components/Button'
import Headshot from '../../components/Headshot'

// Other
import AUTH from '../../utils/AUTH';

// ========================================== Functions  ==========================================

class Profile extends Component {

  constructor(){
    super();

    this.state = {
      userId: '',
      firstName: '',
      lastName: '',
      username: '',
      image: '',
      password: ''
    }
  }

  // When page loads, load the user
  componentDidMount() {
    this.loadUser();
  }

  // Request to load user
  loadUser = () => {
    AUTH
      .getUser()
      .then(res =>
        this.setState({ 
          userId: res.data.user._id,
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          username: res.data.user.username,
          image: res.data.user.image,
          password: '',
        })
      )
      .catch(err => console.log(err));
  };

  // As user types
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // When user clicks submit button
  handleSubmit = e => {
    e.preventDefault();

    AUTH
      .updateUser(this.state.userId, {
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
      <Row justify='content-md-center'>
        <Col size='md-6'>
          <Card cardClass={'cardWrap'}>
            <header>
              <h1> {this.state.firstName}'s Profile </h1>
              <img id='profileImg' src={this.state.image} alt={this.state.firstName + ' ' + this.state.image} className="rounded-circle" />
            </header>

            <form style={{ marginTop: 10 }}>
              {/* Users Name */}
              <div className="row">
                {/* First Name */}
                <div className="col">
                  <label htmlFor='firstname'> First Name: </label>
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
                {/* Last Name */}
                <div className="col">
                  <label htmlFor='lastname'> Last Name: </label>
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* Username */}
              <label htmlFor='username'> Username: </label>
              <Input
                type='text'
                name='username'
                value={this.state.username}
                disabled={true}
              />

              {/* Password */}
              <label htmlFor='password'> Password: </label>
              <Input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />

              {/* Submit Button */}
              <Btn
                disabled={!(this.state.firstName && this.state.lastName && this.state.password)}
                onClick={this.handleSubmit}
                btnColor='green'
                style={{
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                Submit Changes!
              </Btn>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
}

// ============================================ Export ============================================

export default Profile;
