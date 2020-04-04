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
    this.belongsTo(models.Account, {
      foreignKey: 'account_id',
      as: 'accounts',
    });
  }
}

export default Operation;
