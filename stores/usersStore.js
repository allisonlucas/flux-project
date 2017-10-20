const AppDispatcher = require( '../dispatcher/AppDispatcher' );
const { EventEmitter } = require( 'events' );
const fluxUserManagementConstants = require( '../constants/fluxUserManagementConstants' );
const _ = require( 'underscore' );

// Define initial data points
let _users = {};

// Method to load users from mock API
function loadUserData( data ) {
  _users = data;
}

// Add user
function addUser( first, last, address, editing ) {
  _users.push( {
    id: _users.length,
    first: first,
    last: last,
    address: address,
    editing: editing
  } );
}

// Delete user
function deleteUser( id ) {
  delete _users[id];
}

// Edit user
function editUser( id ) {
  _users[id].editing = true;
}

// Update user
function updateUser( id, first, last, address ) {
  _users[id].first = first;
  _users[id].last = last;
  _users[id].address = address;
  _users[id].editing = false;
}

// Extend usersStore with EventEmitter to add eventing capabilities
const UsersStore = _.extend( {}, EventEmitter.prototype, {

  // Return users
  getUsers: function() {
    return _users;
  },

  // Emit Change event
  emitChange: function() {
    this.emit( 'change' );
  },

  // Add change listener
  addChangeListener: function( callback ) {
    this.on( 'change', callback );
  },

  // Remove change listener
  removeChangeListener: function( callback ) {
    this.removeListener( 'change', callback );
  }

} );

// Register callback with AppDispatcher
AppDispatcher.register( function( payload ) {
  const action = payload.action;

  switch( action.actionType ) {

    // Respond to RECEIVE_DATA action
    case fluxUserManagementConstants.RECEIVE_DATA:
      loadUserData( action.data );
      break;

    // Respond to USER_ADD action
    case fluxUserManagementConstants.USER_ADD:
      addUser( action.first, action.last, action.address, action.editing );
      break;

    // Respond to USER_DELETE action
    case fluxUserManagementConstants.USER_DELETE:
      deleteUser( action.id );
      break;

    // Respond to USER_EDIT action
    case fluxUserManagementConstants.USER_EDIT:
      editUser( action.id );
      break;

    // Respond to USER_UPDATE action
    case fluxUserManagementConstants.USER_UPDATE:
      updateUser( action.id, action.first, action.last, action.address, action.editing );
      break;

    default:
      return true;

  }

  // If action was responded to, emit change event
  UsersStore.emitChange();

  return true;

} );

module.exports = UsersStore;

