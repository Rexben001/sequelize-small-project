'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //bulkInsert used to insert more than one
    return queryInterface.bulkInsert('Users', [{
        username: 'John Doe',
  password: '1234',
  createdAt: new Date(),
        updatedAt: new Date()
},
{
  username: 'John Doe2',
password: '1234',
createdAt: new Date(),
  updatedAt: new Date()
  },
  {
    username: 'John Doe3',
password: '1234',
createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: 'John Doe4',
password: '1234',
createdAt: new Date(),
    updatedAt: new Date()
},], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
    
   return queryInterface.bulkDelete('Users', null, {});

  }
};
