// =========================================== Imports  ===========================================

import React from 'react';

// Style
import './Button.scss'

// ========================================== Functions  ==========================================

const Btn = props => (
  <button 
    type='button'
    className={`btn btn-${props.btnColor ? props.btnColor : 'green'}`}
    {...props}
  >
    {props.children}
  </button>
)

// ============================================ Export ============================================

export default Btn;
