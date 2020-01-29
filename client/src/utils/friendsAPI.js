// Imports ========================================================================================

import axios from "axios";

// Export =========================================================================================

export default {

  // Methods ======================================================================================

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData)
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  }
};
