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

  static associate(models) {}
}

export default Transfer;
