import Account from '../models/Account';
import Operation from '../models/Operation';

export default {
  update: async (req, res) => {
    const { type = 'withdraw' } = req.query;
    const { id } = req.params;
    let { value } = req.body;

    try {
      const account = await Account.findByPk(id);
      if (type !== 'deposit') {
        if (!(value < account.balance && value > 0))
          return res.status(400).json({ message: 'Valor inválido!' });
        value = -value;
      }
      Object.assign(account, { balance: account.balance + value });
      await account.save();

      const operation = await Operation.create({
        account_id: account.id,
        type,
        value,
      });

      return res.status(200).json({ account, operation });
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
  },
  index: async (req, res) => {
    const operations = await Operation.findAll();

    return res.status(200).json(operations);
  },
};
