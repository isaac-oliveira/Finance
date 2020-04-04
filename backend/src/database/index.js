import Sequelize from 'sequelize';
import Users from '../models/Users';
import Accounts from '../models/Accounts';
import Cards from '../models/Cards';
import Operations from '../models/Operations';
import Transfers from '../models/Transfers';

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'finance-db',
    dialect: 'mysql',
  }
);

Users.init(connection);
Accounts.init(connection);
Cards.init(connection);
Operations.init(connection);
Transfers.init(connection);

Users.associate(connection.models);
Accounts.associate(connection.models);
Cards.associate(connection.models);
Operations.associate(connection.models);
Transfers.associate(connection.models);

export default connection;
