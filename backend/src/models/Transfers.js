import { Model, DataTypes } from 'sequelize';

class Transfers extends Model {
  static init(sequelize) {
    super.init(
      {
        value: DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Accounts, {
      foreignKey: 'accountSentId',
      as: 'accounts',
    });
    this.belongsTo(models.Accounts, {
      foreignKey: 'accountsReceivedId',
      as: 'accounts',
    });
  }
}

export default Transfers;
