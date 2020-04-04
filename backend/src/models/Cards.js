import { Model, DataTypes } from 'sequelize';

class Cards extends Model {
  static init(sequelize) {
    super.init(
      {
        cardNumber: DataTypes.BIGINT,
        expire: DataTypes.DATE,
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

export default Cards;
