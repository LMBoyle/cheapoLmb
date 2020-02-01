// =========================================== Imports  ===========================================

import axios from 'axios';

// ============================================ Export ============================================

export default {

  // ========================================== Methods  ==========================================

  // Gets all friends
  getFriends: function() {
    return axios.get('/api/friends');
  },

  // Gets the user with the given id
  getFriend: function(id) {
    return axios.get('/api/friends/' + id);
  },

  updateFriend: function(id, userData) {
    return axios.put('/api/friends/' + id, userData)
  },
  
  // Deletes the user with the given id
  deleteFriend: function(id) {
    return axios.delete('/api/friends/' + id);
  }
  
};
