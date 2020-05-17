export const formatBrCurrency = (value) =>
  `R$ ${String(value.toFixed(2)).replace('.', ',')}`;
export const formatCardNumber = (cardNumber) =>
  String(cardNumber).replace(/(\d{4})(\d{4})(\d{4})(\d)/, '$1 $2 $3 $4');
export const formatExpireDate = (expireDate) =>
  String(expireDate)
    .replace(/\D/g, '')
    .slice(0, 6)
    .replace(/\d{2}(\d{2})(\d{2})/, '$2/$1');
export const formatAccountNumber = (accountNumber) =>
  String(accountNumber).replace(/(\d{7})(\d)/, '$1-$2');
