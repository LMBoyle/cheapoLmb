// Imports ========================================================================================

import React from "react";

// Functions ======================================================================================

function LoginForm(props) {
  return (
    <div>
      <label htmlFor="username"> Username </label> 
      <input type="username" className="form-control" id="username" placeholder="Username" />
      <label htmlFor="password"> Password </label> 
      <input type="password" className="form-control" id="password" placeholder="Password"/>
      <br></br>
      <button type="button" className="btn btn-info" onClick={props.onClick}> Submit </button>
    </div>
  );
}

// Export =========================================================================================

export default LoginForm