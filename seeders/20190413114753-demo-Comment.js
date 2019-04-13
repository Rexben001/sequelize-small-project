'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //bulkInsert used to insert more than one
    return queryInterface.bulkInsert('Comments', [{ 
    post: 'Hello to the world',
    reaction: 'Like',
    UserId: 1,
    createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      post: 'Hello to the world2',
      reaction: 'Like2',
      UserId: 1,
      createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        post: 'Hello to the world2',
        reaction: 'Like2',
        UserId: 2,
        createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
    
   return queryInterface.bulkDelete('Users', null, {});

  }
};
