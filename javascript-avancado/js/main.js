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

// LISTA OS PRODUTOS NA TELA INICIAL
function setList(list) {
	let tableContent = 
	`<thead>
		<tr>
			<th>Descricao</th>
			<th>Quantidade</th>
			<th>Preco</th>
		</tr>
	</thead>
	<tbody>
		${ generateTableItems(list) }
	</tbody>`;
	document.querySelector('#table-list').innerHTML = tableContent;
}

// GERA AS LINHAS DA TABELA COM OS DADOS DA LISTA
function generateTableItems(list) {
	let rows = '';
	list.forEach((item) => {
		rows += 
		`<tr>
			<td>${ formatDescription(item.description) }</td>
			<td>${ item.amount }</td>
			<td>${ formatValue(item.value) }</td>
		</tr>`;
	});
	return rows;
}

// FORMATA O TEXTO DA DESCRIÇÃO
function formatDescription(description) {
	// TRANSFORMA A DESCRIÇÃO PARA MINÚSCULO
	let string = description.toLowerCase();
	// DEIXANDO A PRIMEIRA LETRA MAIÚSCULA
	string = string.charAt(0).toUpperCase() + string.slice(1);
	return string;
}

// FORMATA O VALOR
function formatValue(value) {
	// TRANSFORMA O VALOR EM DECIMAL E DEPOIS PARA STRING
	let string = `$ ${ parseFloat(value).toFixed(2) }`;
	// SUBSTITUI O PONTO POR VIRGULA
	string = string.replace(".", ",");
	return string;
}

// ADICIONA O PRODUTO NA LISTA COM OS CAMPOS DE ENTRADA
function addData() {
	let description = document.querySelector('#description').value;
	let amount = document.querySelector('#amount').value;
	let value = document.querySelector('#value').value;
	// ADICIONA O OBJETO NO INÍCIO DA LISTA
	list.unshift({ 
		description: description, 
		amount: amount, 
		value: value 
	});
	setList(list);
}

setList(list);