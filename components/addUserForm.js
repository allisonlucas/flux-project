const React = require( 'react' );
const usersStore = require( '../stores/usersStore' );
const fluxUserManagementActions = require( '../actions/fluxUserManagementActions' );

// Flux users view
class AddUserForm extends React.Component{

  constructor( props ) {
    super( props );
    this.state = {
      first: {
        value: ''
      },
      last: {
        value: ''
      },
      address: {
        value: ''
      }
    };
    this.firstChange = this.firstChange.bind( this );
    this.lastChange = this.lastChange.bind( this );
    this.addressChange = this.addressChange.bind( this );
  }

  // Add user via Actions
  addUser( event ) {
    fluxUserManagementActions.addUser(
      this.state.first.value,
      this.state.last.value,
      this.state.address.value,
      false
    );
    this.setState( {
      first: {
        value: ''
      },
      last: {
        value: ''
      },
      address: {
        value: ''
      }
    } );
  }

  firstChange( event ) {
    this.setState( {
      first: {
        value: event.target.value
      }
    } )
  }

  lastChange( event ) {
    this.setState( {
      last: {
        value: event.target.value
      }
    } )
  }

  addressChange( event ) {
    this.setState( {
      address: {
        value: event.target.value
      }
    } )
  }

  // Render addUserForm View
  render() {
    return (
      <div className="table-container">
        <h2>Add User:</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Add User</th>
            </tr>
          </thead>
          <tbody>
            <tr key={usersStore.getUsers().length}>
              <td><input type="text" placeholder="First Name" value={this.state.first.value} onChange={this.firstChange} /></td>
              <td><input type="text" placeholder="Last Name" value={this.state.last.value} onChange={this.lastChange} /></td>
              <td><input type="text" placeholder="City, State" value={this.state.address.value} onChange={this.addressChange} /></td>
              <td><button onClick={ this.addUser.bind( this ) }>Add User</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

};

module.exports = AddUserForm;
