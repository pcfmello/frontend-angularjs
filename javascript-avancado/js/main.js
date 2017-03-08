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

function setList(list) {

	let tableContent = `
		<thead>
			<tr>
				<th>Descrição</th>
				<th>Quantidade</th>
				<th>Preço</th>
			</tr>
		</thead>
		<tbody>
			${ generateTableItems(list) }
		</tbody>
	`;


	document.querySelector('#table-list').innerHTML = tableContent;
}

// GERA AS LINHAS DA TABELA COM OS DADOS DA LISTA
function generateTableItems(list) {
	let rows = '';
	list.forEach((item) => {
		rows += `
			<tr>
				<td>${ item.description }</td>
				<td>${ item.amount }</td>
				<td>${ item.value }</td>
			</tr>`;
	});
	return rows;
}

console.log(getTotal(list));
setList(list);