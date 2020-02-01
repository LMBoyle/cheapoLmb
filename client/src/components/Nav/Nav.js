// Imports ========================================================================================

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

// Icons
import { IoMdLogIn, IoMdPersonAdd, IoMdContact, IoMdLogOut, IoIosContacts } from 'react-icons/io'
import { FaPiggyBank } from 'react-icons/fa'
import { GiCoins } from 'react-icons/gi'


// Functions ======================================================================================

const Nav = (props) => {
  let greeting;

  // If user not signed in
  if (props.user === null) {
    greeting = (
      <Fragment>
        <span className='nav navbar-right'>
          <Link to='/signup' className='signUp'><IoMdPersonAdd/> Sign Up </Link>
          <Link to='/login' className='login'><IoMdLogIn/> Login </Link>
        </span>
      </Fragment>
    )
  } 
  // If user signed in
  else if (props.user.firstName || props.user.username) {
    greeting = (
      <Fragment>
        <div className='text-right'>
          <Link to='/profile'><IoMdContact/> User Profile </Link>
          <Link to='/' className='logout' onClick={props.logout}><IoMdLogOut/> Logout </Link>
          <Link to='/goals' className='goals'><GiCoins/> Goals </Link>
          <Link to='/friends' className='friends'><IoIosContacts/> Friends </Link>
        </div>
      </Fragment>
    )
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'><FaPiggyBank/> Cheapo </Link>
        
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarLinks' aria-controls='navbarLinks' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        
        <span className='collapse navbar-collapse justify-content-end' id='navbarLinks'>
          {greeting}
        </span>
      </div>
    </nav>
  )
};

// Export =========================================================================================

export default Nav;