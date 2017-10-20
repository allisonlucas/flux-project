const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const userData = require( './userData' );
const userAPI = require( './utils/userAPI' );
const UserManagementApp = require( './components/userManagementApp' );

// Load mock user data into localStorage
userData.init();

// Load mock API call
userAPI.getUserData();

// Render fluxUserApp controller view
ReactDOM.render(
  <UserManagementApp />,
  document.getElementById('root')
);
