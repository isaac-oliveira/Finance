import { Model, DataTypes } from 'sequelize';

class Accounts extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        agency: DataTypes.INTEGER,
        accountNumber: DataTypes.INTEGER,
        balance: DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'userId', as: 'users' });
    this.belongsTo(models.Card, { foreignKey: 'account_id', as: 'cards' });
    this.hasMany(models.Cards, { foreignKey: 'accountId', as: 'cards' });
    this.hasMany(models.Operations, {
      foreignKey: 'accountId',
      as: 'operations',
    });
    this.belongsToMany(models.Transfers, {
      foreignKey: 'accountSentId',
      as: 'transfers',
    });
    this.belongsToMany(models.Transfers, {
      foreignKey: 'accountReceivedId',
      as: 'transfers',
    });
  }
}

export default Accounts;
