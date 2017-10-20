module.exports = {
  // Load mock user data into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify([
      {
        id: '0',
        first: 'Jane',
        last: 'Bee',
        address: 'Durango, CO',
        editing: false
      },
      {
        id: '1',
        first: 'Bob',
        last: 'Sea',
        address: 'Jackson Hole, WY',
        editing: false 
      },
      {
        id: '2',
        first: 'Carl',
        last: 'Aay',
        address: 'Moab, UT',
        editing: false
      },
    ]));
  }

};
