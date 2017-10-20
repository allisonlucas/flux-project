const React = require( 'react' );
const fluxUserManagementActions = require( '../actions/fluxUserManagementActions' );

// Flux users view
class UserTable extends React.Component{

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

  // Edit user via Actions
  editUser( id ) {
    fluxUserManagementActions.editUser( id );
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

  // Update user via Actions
  updateUser( id ) {
    const first = this.state.first.value || this.props.users[id].first;
    const last = this.state.last.value || this.props.users[id].last;
    const address = this.state.address.value || this.props.users[id].address;
    fluxUserManagementActions.updateUser( id, first, last, address );
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

  // Delete user via Actions
  deleteUser( id ) {
    fluxUserManagementActions.deleteUser( id );
  }

  // Render userTable View
  render() {
    return (
      <div className="table-container">
        <h1>Users:</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map( ( user, index ) => {
                if( user.editing === true ) {
                  return (
                    <tr key = {user.id}>
                      <td><input type="text" placeholder={user.first} value={this.state.first.value} onChange={this.firstChange} /></td>
                      <td><input type="text" placeholder={user.last} value={this.state.last.value} onChange={this.lastChange} /></td>
                      <td><input type="text" placeholder={user.address} value={this.state.address.value} onChange={this.addressChange} /></td>
                      <td><button onClick={ this.updateUser.bind( this, user.id ) }>Update User</button></td>
                    </tr> 
                  )
                } else {
                  return (
                    <tr key = {user.id}>
                      <td>{user.first}</td>
                      <td>{user.last}</td>
                      <td>{user.address}</td>
                      <td><button onClick={ this.deleteUser.bind( this, user.id ) }>Delete</button></td>
                      <td><button onClick={ this.editUser.bind( this, user.id ) }>Edit</button></td>
                    </tr>
                  )
                }
              } )
            }
          </tbody>
        </table>
      </div>
    )
  }

};

module.exports = UserTable;
