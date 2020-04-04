import { Model, DataTypes } from 'sequelize';

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Accounts, { foreignKey: 'userId', as: 'accounts' });
  }
}

export default Users;
