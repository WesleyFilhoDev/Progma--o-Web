const btAdic = document.getElementById("btAdic");
const inputNUm = document.getElementById("inputNum");
const inputSoma = document.getElementById("inputSoma");
let somatorio = 0;

btAdic.onclick = () => {
    let num = parseInt(inputNUm.value);
    if (isNaN(num)) {
        alert("Digite um número inteiro!");
        return;
    }

somatorio += num;
inputSoma.value = somatorio
inputNUm.value = ""
inputNUm.focus();
};