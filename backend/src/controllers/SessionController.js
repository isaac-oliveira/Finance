import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Account from '../models/Account';
import Card from '../models/Card';

export default {
  store: async (req, res) => {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user && bcrypt.compareSync(password, user.password)) {
      try {
        const account = await Account.findOne({ where: { user_id: user.id } });
        const card = await Card.findOne({ where: { account_id: account.id } });

        const token = jwt.sign({ id: user.id }, process.env.SECRET);

        return res.status(200).send({ user, account, card, token });
      } catch (err) {
        return res.status(500).send({ message: 'Erro interno no servidor' });
      }
    }
    return res.status(401).send({ message: 'Usuário ou senha inválido!' });
  },
};