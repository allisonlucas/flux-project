const AppDispatcher = require( '../dispatcher/AppDispatcher' );
const fluxUserManagementConstants = require( '../constants/fluxUserManagementConstants' );

// Define actions object
const FluxUserManagementActions = {

  // Receive inital user data
  receiveUsers: function( data ) {
    AppDispatcher.handleAction( {
      actionType: fluxUserManagementConstants.RECEIVE_DATA,
      data: data
    } )
  },

  // Add user
  addUser: function( first, last, address ) {
    AppDispatcher.handleAction( {
      actionType: fluxUserManagementConstants.USER_ADD,
      first: first,
      last: last,
      address: address,
      editing: false
    } )
  },

  // Delete user
  deleteUser: function( id ) {
    AppDispatcher.handleAction( {
      actionType: fluxUserManagementConstants.USER_DELETE,
      id: id
    } )
  },

  // Edit user
  editUser: function( id ) {
    AppDispatcher.handleAction( {
      actionType: fluxUserManagementConstants.USER_EDIT,
      id: id,
      editing: true
    } )
  },

  // Update user
  updateUser: function( id, first, last, address ) {
    AppDispatcher.handleAction( {
      actionType: fluxUserManagementConstants.USER_UPDATE,
      id: id,
      first: first,
      last: last,
      address: address,
      editing: false
    } )
  }

};

module.exports = FluxUserManagementActions;
