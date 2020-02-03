// =========================================== Imports  ===========================================

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Style
import '../App/Pages.scss';

// Components
import { Container, Row, Col } from '../../components/Grid';
import { Input } from '../../components/Form';
import Btn from '../../components/Button'
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      redirectTo: '/'
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } 
    
    else {
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
                  <Btn btnColor='green'><Link to='/signup'> Register </Link></Btn>
                  
                  <Btn 
                    btnColor='gold' 
                    onClick={this.handleSubmit} 
                    style={{float: 'right'}}
                  > 
                    Login 
                  </Btn>
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
