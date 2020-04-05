import Account from '../models/Account';
import Operation from '../models/Operation';
import Transfer from '../models/Transfer';

export default {
  update: async (req, res) => {
    const { id } = req.params;
    const { agency, account_number, value } = req.body;

    try {
      const accountSent = await Account.findByPk(id);
      if (accountSent.balance >= value) {
        const accountReceived = await Account.findOne({
          where: { agency, account_number },
        });

        const transfer = await Transfer.create({
          account_sent_id: accountSent.id,
          account_received_id: accountReceived.id,
          value,
        });

        Object.assign(accountSent, { balance: accountSent.balance - value });
        await accountSent.save();

        await Operation.create({
          account_id: accountSent.id,
          type: 'transfer',
          value: -value,
        });

        Object.assign(accountReceived, {
          balance: accountReceived.balance + value,
        });
        await accountReceived.save();

        await Operation.create({
          account_id: accountReceived.id,
          type: 'transfer',
          value,
        });

        return res.status(200).json({
          transfer_id: transfer.id,
          agency_sent: accountSent.agency,
          account_number_sent: accountSent.account_number,
          agency_received: accountReceived.agency,
          account_number_received: accountReceived.account_number,
          value: transfer.value,
          date: transfer.createdAt,
        });
      }
      return res.status(400).json({ message: 'Saldo insuficiente' });
    } catch (err) {
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
  },
};
