function formatMoney(value) {
	return `R$ ${Number(value).toFixed(2)}`.replace('.', ',');
}

function formatCardNumber(value) {
	if (!value) return null;

	return String(value)
		.replace(/\D/g, '')
		.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
}

function formatCardExpire(value) {
	const date = new Date(value);

	if (!value) return null;

	const mounth = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${mounth > 9 ? '' : '0'}${mounth}/${year}`;
}

function formatCountNumber(value) {
	if (!value) return null;
	return String(value)
		.replace(/\D/g, '')
		.replace(/(\d{7})(\d{1})/, '$1-$2');
}

export { formatMoney, formatCardNumber, formatCardExpire, formatCountNumber };
