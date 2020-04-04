import { Model, DataTypes } from 'sequelize';

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        card_number: DataTypes.BIGINT,
        expire: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Account, {
      foreignKey: 'account_id',
      as: 'card_account',
    });
  }
}

export default Card;
