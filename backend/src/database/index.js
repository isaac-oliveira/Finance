import Sequelize from 'sequelize';

import User from '../models/User';
import Account from '../models/Account';
import Card from '../models/Card';
import Operation from '../models/Operation';
import Transfer from '../models/Transfer';

const connection = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: 'finance-db',
  dialect: 'mysql',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

User.init(connection);
Account.init(connection);
Card.init(connection);
Operation.init(connection);
Transfer.init(connection);

User.associate(connection.models);
Account.associate(connection.models);
Card.associate(connection.models);
Operation.associate(connection.models);
Transfer.associate(connection.models);

export default connection;
