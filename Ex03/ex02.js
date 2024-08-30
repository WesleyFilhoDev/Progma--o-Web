const inputMenorValor = document.getElementById("inputMenorValor");
const inputMaiorValor = document.getElementById("inputMaiorValor");
const btSortear = document.getElementById("btSortear");
const resultado = document.getElementById("resultado")

btSortear.onclick = () => {
    let menor = parseInt(inputMenorValor.value);
    let maior = parseInt(inputMaiorValor.value);
    let numeroSorteado = Math.floor(Math.random() * (maior - menor + 1)) + menor;

    resultado.innerHTML = "Número sorteado: " + numeroSorteado;
}