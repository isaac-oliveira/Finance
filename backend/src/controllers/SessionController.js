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

        return res.status(200).json({
          user: {
            id: user.id,
            name: user.name,
            agency: account.agency,
            account_number: account.account_number,
            balance: account.balance,
            card_number: card.card_number,
            card_expire: card.expire,
          },
          token,
        });
      } catch (err) {
        return res.status(500).json({ message: 'Erro interno no servidor' });
      }
    }
    return res.status(401).json({ message: 'Usuário ou senha inválido!' });
  },
};
