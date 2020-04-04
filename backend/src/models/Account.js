import { Model, DataTypes } from 'sequelize';

class Account extends Model {
  static init(sequelize) {
    super.init(
      {
        agency: DataTypes.INTEGER,
        account_number: DataTypes.INTEGER,
        balance: DataTypes.FLOAT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasOne(models.Card, { foreignKey: 'account_id', as: 'card' });
    this.hasMany(models.Operation, {
      foreignKey: 'account_id',
      as: 'operations',
    });
  }
}

export default Account;
