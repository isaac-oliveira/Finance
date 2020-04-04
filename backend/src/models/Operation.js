import { Model, DataTypes } from 'sequelize';

class Operation extends Model {
  static init(sequelize) {
    super.init(
      {
        type: DataTypes.ENUM('withdraw', 'deposit', 'pay'),
        value: DataTypes.FLOAT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Account, {
      foreignKey: 'account_id',
      as: 'operation_account',
    });
  }
}

export default Operation;
