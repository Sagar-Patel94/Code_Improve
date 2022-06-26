'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      name: 'Employee Ram',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
