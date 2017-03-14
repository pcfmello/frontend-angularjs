// FUNÇÃO DE CONFIGURAÇÃO DA APLICAÇÃO
function setConfig() {
	let texts = {
		title: "Shopping Control"
	}
	// DEFINE O TÍTULO DA PÁGINA
	document.title = texts.title;

	// BUSCA O ID navTitle 	E SETA O SEU CONTEÚDO
	document.querySelector('#navTitle').innerHTML = texts.title;

}

// EXECUTA A FUNÇÃO
setConfig();