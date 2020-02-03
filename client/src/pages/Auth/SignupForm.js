// =========================================== Imports  ===========================================

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Components
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input } from '../../components/Form';
import Btn from '../../components/Button';

// Other
import AUTH from '../../utils/AUTH';

// ========================================== Functions  ==========================================

class SignupForm extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      redirectTo: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO - validate!
    AUTH
      .signup({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (!res.data.errmsg) {
          this.setState({
            redirectTo: '/'
          });
        } 
        else {
          console.log('duplicate');
        }
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }

    return (
      <Container>
        <main id='signupMain'>
          <Row justify='content-md-center'>
            <Col size='md-6'>
              <form style={{ marginTop: 10 }}>

                <label htmlFor='username'> First name: </label>
                <Input
                  type='text'
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />

                <label htmlFor='username'> Last name: </label>
                <Input
                  type='text'
                  name='lastName'
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />

                <label htmlFor='username'> Username: </label>
                <Input
                  type='text'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChange}
                />

                <label htmlFor='password'> Password: </label>
                <Input
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <label htmlFor='confirmPassword'> Confirm Password: </label>
                <Input
                  type='password'
                  name='confirmPassword'
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />

                <Btn btnColor='gold'><Link to='/login'> Login </Link></Btn>
                
                <Btn 
                  btnColor='green' 
                  onClick={this.handleSubmit}
                  style={{float: 'right'}}
                > 
                  Register 
                </Btn>
              </form>

            </Col>
          </Row>
        </main>
      </Container>
    )
  }
}

// ============================================ Export ============================================

export default SignupForm;
