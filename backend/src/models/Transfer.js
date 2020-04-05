import { Model, DataTypes } from 'sequelize';

class Transfer extends Model {
  static init(sequelize) {
    super.init(
      {
        value: DataTypes.FLOAT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Account, {
      foreignKey: 'account_sent_id',
      as: 'accountSent',
    });
    this.belongsTo(models.Account, {
      foreignKey: 'account_received_id',
      as: 'accountReceived',
    });
  }
}

export default Transfer;
