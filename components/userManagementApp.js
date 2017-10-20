const React = require( 'react' );
const usersStore = require( '../stores/usersStore' );
const UserTable = require( './userTable' );
const AddUserForm = require( './addUserForm' );

// Method to retrieve state from Store
function getUserState() {
  return {
    users: usersStore.getUsers()
  };
}

// Define main Controller View
class UserManagementApp extends React.Component {
  
  constructor( props ) {
    super( props );
    this.state = getUserState();
    this._onChange = this._onChange.bind( this );
  }

  // Add change listeners to store
  componentDidMount() {
    usersStore.addChangeListener( this._onChange );
  }

  // Method to setState based upon Store changes
  _onChange() {
    this.setState( getUserState() );
  }

  // Remove change listeners from store
  componentWillUnmount() {
    usersStore.removeChangeListener( this._onChange );
  }

  // Render child components, passing state via props
  render() {
    return (
      <div>
        <UserTable users={this.state.users} />
        <AddUserForm users={this.state.users} />
      </div>
    );
  }
};

module.exports = UserManagementApp;

