const fluxUserActions = require( '../actions/fluxUserManagementActions' );

module.exports = {

  // Load mock user data from localStorage into usersStore via action
  getUserData: function() {
    const data = JSON.parse( localStorage.getItem('users') );
    fluxUserActions.receiveUsers( data );
  }

};
