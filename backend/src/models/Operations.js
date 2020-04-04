import { Model, DataTypes } from 'sequelize';

class Operations extends Model {
  static init(sequelize) {
    super.init(
      {
        type: DataTypes.ENUM('withdraw', 'deposit', 'pay'),
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
      foreignKey: 'accountId',
      as: 'accounts',
    });
  }
}

export default Operations;
