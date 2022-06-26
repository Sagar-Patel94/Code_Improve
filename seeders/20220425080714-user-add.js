'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [{
         name: 'John Doe',
       }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
