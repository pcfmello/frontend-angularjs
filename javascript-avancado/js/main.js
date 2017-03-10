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
			<th colspan="2">Acoes</th>
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
	// list.forEach((item) => {
	for(let index in list) {	
		rows += 
		`<tr>
			<td>${ formatDescription(list[index].description) }</td>
			<td>${ list[index].amount }</td>
			<td>${ formatValue(list[index].value) }</td>
			<td><button class="btn btn-warning" onclick="setUpdate(${ index });">Editar</button> <button class="btn btn-danger" onclick="">Deletar</button></td>
		</tr>`;
	};
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

// SETA OS CAMPOS COM OS DADOS DO OBJETO PARA ALTERAÇÃO
function setUpdate(index) {
	// busca o item no array através do índice
	let obj = list[index];
	// seta os valores do objeto recebido nos campos do formulário
	document.querySelector('#description').value = obj.description;
	document.querySelector('#amount').value = obj.amount;
	document.querySelector('#value').value = obj.value;
	// mostra os botões de ações para atualizar/limpar
	document.querySelector('#btnUpdate').style.display = "inline-block";
	// esconde o botão adicionar
	document.querySelector('#btnAdd').style.display = "none";
	// insere o input hidden com o indice da lista no html dinamicamente
	document.querySelector('#inputIdUpdate').innerHTML = `<input id="idUpdate" type="hidden" value="${ index }" />`;
}

// LIMPA OS CAMPOS DO FORMULÁRIO
function resetForm() {
	document.querySelector('#description').value = "";
	document.querySelector('#amount').value = "";
	document.querySelector('#value').value = "";
	document.querySelector('#inputIdUpdate').innerHTML = "";

	document.querySelector('#btnUpdate').style.display = "none";
	document.querySelector('#btnAdd').style.display = "inline-block";
}

// ATUALIZA O OBJETO
function updateData() {
	let id = document.querySelector('#idUpdate').value;
	let description = document.querySelector('#description').value;
	let amount = document.querySelector('#amount').value;
	let value = document.querySelector('#value').value;

	// substitui o objeto da lista
	list[id] = { 
		description: description, 
		amount: amount, 
		value: value
	}

	resetForm();
	setList(list);
}

setList(list);