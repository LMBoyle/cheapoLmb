// =========================================== Imports  ===========================================

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Components
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import Facebook from '../../components/SocialMedia/Facebook'; 

// ========================================== Functions  ==========================================

class LoginForm extends Component {

  constructor() {
    super();
    
		this.state = {
			username: '',
			password: '',
			redirectTo: null
    };

	}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      redirectTo: '/'
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <Container>
          <main id='loginMain'>
            <Row justify='content-md-center'>
              <Col size='md-6'>
              {/* Facebook Button */}
                <Facebook />

                {/* Separator */}
                <div className='loginSeparator text-center'>
                  <span className='sideLine'></span>
                  <span className='sepText'> Or </span>
                  <span className='sideLine'></span>
                </div>

                {/* Login Form */}
                <form style={{marginTop: 10}}>
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
                  <Link to='/signup'> Register </Link>
                  
                  <FormBtn onClick={this.handleSubmit}> Login </FormBtn>
                </form>

              </Col>
            </Row>
          </main>
        </Container>
      )
    }
  }
}

// ============================================ Export ============================================

export default LoginForm;
