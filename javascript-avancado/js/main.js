// LISTA DE PRODUTOS
let list = [
	{ description: "rice", amount: "1", value: 5.40 },
	{ description: "beer", amount: "12", value: 22.30 },
	{ description: "meat", amount: "1", value: 29.59 }
];

// RETORNA O VALOR TOTAO DE TODOS OS PRODUTOS X  QUANTIDADE
function getTotal(list) {
	let total = 0;
	list.forEach((item) => total += item.value * item.amount);
	return total;
}

console.log(getTotal(list));