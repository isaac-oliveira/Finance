import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Account from '../models/Account';
import Card from '../models/Card';

import generateNumber from '../utils/generateNumber';

export default {
  store: async (req, res) => {
    const { name, login, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    try {
      const user = await User.create({
        name,
        login,
        password: hash,
      });

      const account = await Account.create({
        user_id: user.id,
        agency: generateNumber(4),
        account_number: generateNumber(8),
        balance: 0,
      });

      const card = await Card.create({
        account_id: account.id,
        card_number: generateNumber(16),
        expire: Date.now(),
      });

      const token = jwt.sign({ id: user.id }, process.env.SECRET);

      return res.status(201).send({ user, account, card, token });
    } catch (err) {
      return res.status(500).send({ message: 'Erro interno no servidor', err });
    }
  },
  index: async (req, res) => {
    const users = await User.findAll();

    return res.status(200).send({ users });
  },
};
