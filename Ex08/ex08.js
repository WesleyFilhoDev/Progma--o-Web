let btnGerar = document.getElementById('btnGerar');
let url = 'https://api.adviceslip.com/advice';

function chamarApi() {
    // Fazendo a requisição para a API
    fetch(url)
        .then(function(response) {
            // Convertendo a resposta para JSON
            return response.json();
        })
        .then(function(data) {
            // Pegando o conselho do JSON
            let conselho = data.slip.advice;
            
            // Exibindo o conselho no div 'resultado'
            let resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '<p>' + conselho + '</p>';
        })
}