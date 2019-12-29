import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import "./Facebook.css"

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  };

  responseFacebook = response => {
    // console.log(response);
  }

  componentClicked = () => console.log("clicked")

  render() {

    return (
      <div className="facebookBtn text-center">
        <FacebookLogin
          appId="510863782846510"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} 
        />
      </div>
    )
  }
}

