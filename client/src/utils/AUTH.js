// =========================================== Imports  ===========================================

import axios from 'axios';

// ============================================ Export ============================================

export default {

  // ========================================== Methods  ==========================================

  // Gets user info
  getUser: function() {
    return axios.get('/auth/user');
  },

  // Logs the user out
  logout: function() {
    return axios.post('/auth/logout');
  },

  // Log the user in
  login: function(username, password) {
    return axios.post('/auth/login', { username, password });
  },

  // New user registration
  signup: function(userData) {
    return axios.post('/auth/signup', userData);
  }, 

  // Update User in database
  updateUser: function(id, userData){
    return axios.put('/auth/user/' + id, userData); 
  }

};