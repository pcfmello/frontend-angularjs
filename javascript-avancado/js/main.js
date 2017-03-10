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
	for(let index in list) {	
		rows += 
		`<tr>
			<td>${ formatDescription(list[index].description) }</td>
			<td>${ formatAmount(list[index].amount) }</td>
			<td>${ formatValue(list[index].value) }</td>
			<td><button class="btn btn-warning" onclick="setUpdate(${ index });">Editar</button> <button class="btn btn-danger" onclick="deleteData(${ index })">Deletar</button></td>
		</tr>`;
	};
	return rows;
}

// FORMATA O TEXTO DA DESCRIÇÃO
function formatDescription(description) {
	// transforma a descrição para minúsculo
	let string = description.toLowerCase();
	// transforma a primeira letra em maiúsculo
	string = string.charAt(0).toUpperCase() + string.slice(1);
	return string;
}

// FORMATA A QUANTIDADE
function formatAmount(amount) {
	// converte a string para um valor inteiro
	return parseInt(amount);
}

// FORMATA O VALOR
function formatValue(value) {
	// transforma o valor de string para decimal e depois para string
	let string = `$ ${ parseFloat(value).toFixed(2) }`;
	// substitui o ponto por vírgula
	string = string.replace(".", ",");
	return string;
}

// ADICIONA O PRODUTO NA LISTA COM OS CAMPOS DE ENTRADA
function addData() {
	if(!validation()) {
		return;
	}
	let description = document.querySelector('#description').value;
	let amount = document.querySelector('#amount').value;
	let value = document.querySelector('#value').value;
	// adiciona o objeto no início da lista
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
	// insere o input hidden com o indice da lista no html dinamicamente
	document.querySelector('#inputIdUpdate').innerHTML = `<input id="idUpdate" type="hidden" value="${ index }" />`;
	// seta os valores do objeto recebido nos campos do formulário
	document.querySelector('#description').value = obj.description;
	document.querySelector('#amount').value = obj.amount;
	document.querySelector('#value').value = obj.value;
	// mostra os botões de ações para atualizar/limpar
	document.querySelector('#btnUpdate').style.display = "inline-block";
	// esconde o botão adicionar
	document.querySelector('#btnAdd').style.display = "none";
}

// LIMPA OS CAMPOS DO FORMULÁRIO
function resetForm() {
	document.querySelector('#description').value = "";
	document.querySelector('#amount').value = "";
	document.querySelector('#value').value = "";
	document.querySelector('#inputIdUpdate').innerHTML = "";

	document.querySelector('#btnUpdate').style.display = "none";
	document.querySelector('#btnAdd').style.display = "inline-block";
	// faz a caixa de mensagens de erro desaparecer
	document.querySelector('#errors').style.display = 'none';
}

// ATUALIZA O OBJETO
function updateData() {
	if(!validation()) {
		return;
	}
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

// DELETA O OBJETO DA LISTA
function deleteData(index) {
	if(confirm("Deseja deletar esse item?")) {
		// retorna uma nova lista sem o objeto do índice do parâmetro
		list = list.filter((item) => list[index] !== item );
	}

	setList(list);
}

// VALIDA OS DADOS DO FORMULÁRIO
function validation() {
	let description = document.querySelector('#description').value;
	let amount = document.querySelector('#amount').value;
	let value = document.querySelector('#value').value;
	let errors = '';

	// verifica se a descrição está vazia
	if(!description) {
		errors += `<p>Digite uma descricao</p>`;
	}

	// verifica se o quantidade está vazio ou inválida
	if(!amount) {
		errors += `<p>Digite uma quantidade</p>`;
	} else if(amount != parseInt(amount)) {
		errors += `<p>Quantidade invalida</p>`;
	}

	// verifica se o valor está vazio ou inválido
	if(!value) {
		errors += `<p>Digite um valor</p>`;
	} else if(value != parseFloat(value)) {
		errors += `<p>Valor invalido</p>`;
	}

	if(!!errors) {
		// faz a caixa de mensagens de erro aparecer
		document.querySelector('#errors').style.display = 'block';
		// seta o html gerado dentro do documento
		document.querySelector('#errors').innerHTML = errors;
		return false;
	} else {
		// faz a caixa de mensagens de erro desaparecer
		document.querySelector('#errors').style.display = 'none';
		return true
	}

}

setList(list);