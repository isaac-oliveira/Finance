import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Account, { foreignKey: 'user_id', as: 'account' });
  }
}

export default User;
