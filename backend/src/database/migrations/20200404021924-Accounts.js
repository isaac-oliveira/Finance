module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      agency: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      account_number: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      balance: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accounts');
  },
};
