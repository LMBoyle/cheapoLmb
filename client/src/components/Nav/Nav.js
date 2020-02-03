// =========================================== Imports  ===========================================

// React
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

// Tooltips
import Tooltip from 'react-simple-tooltip'

// Style
import './Nav.scss';

// Icons
import { IoMdLogIn, IoMdPersonAdd, IoMdContact, IoMdLogOut, IoIosContacts } from 'react-icons/io'
import { FaPiggyBank } from 'react-icons/fa'
import { GiCoins } from 'react-icons/gi'

// ========================================== Functions  ==========================================

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
    
    }
  }

  render() {
    let greeting;
    // If user not signed in
    if (this.props.user === null) {
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
    else if (this.props.user.firstName || this.props.user.username) {
      greeting = (
        <Fragment>
          <div className='text-right'>
            
            <Link to='/profile'>
              <Tooltip 
                content='Profile'
                placement='bottom'
                background='#630d1b'
                border='#00000000'
                padding='10'
              >
                <IoMdContact/>
              </Tooltip>
            </Link>

            <Link to='/'>
              <Tooltip 
                content='Logout'
                placement='bottom'
                background='#630d1b'
                border='#00000000'
                padding='10'
              >
                <IoMdLogOut/> 
              </Tooltip>
            </Link>

            <Link to='/goals'>
              <Tooltip 
                content='Goals'
                placement='bottom'
                background='#630d1b'
                border='#00000000'
                padding='10'
              >
                <GiCoins/> 
              </Tooltip>
            </Link>

            <Link to='/friends'>
              <Tooltip 
                content='Friends'
                placement='bottom'
                background='#630d1b'
                border='#00000000'
                padding='10'
              >
                <IoIosContacts/>
              </Tooltip>
            </Link>

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
  }
};

// ============================================ Export ============================================

export default Nav;