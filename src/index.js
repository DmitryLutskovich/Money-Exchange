// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let result = {};
	if (currency > 10000)
	{
		result.error = "You are rich, my friend! We don't have so much coins for exchange";
		return result;
	}
	let numbercoins = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};
	for(let coin in numbercoins) {
		let count=0;
		while (currency - numbercoins[coin] >= 0) {
			count++;
			currency -= numbercoins[coin];
		}
		if (count > 0) {
			result[coin] = count;
		}
	}
	return result;
}
