let btnGerar = document.getElementById('btnGerar')
let url = 'https://api.thecatapi.com/v1/images/search'

function chamarApi() {
    // Fazendo a requisição para a API
    fetch(url)
        .then(function(response) {
            // Convertendo a resposta para JSON
            return response.json();
        })
        .then(function(data) {
            // Pegando a URL da imagem de gato
            let imagemGato = data[0].url;
            
            // Exibindo a imagem no div 'resultado'
            let resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '<img src="' + imagemGato + '" alt="Imagem de gato" style="max-width: 400px;">';
        })
        .catch(function(error) {
            console.log('Erro:', error);
            let resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '<p>Erro ao carregar a imagem.</p>';
        });
}