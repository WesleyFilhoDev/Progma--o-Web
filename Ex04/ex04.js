const nomeAluno = document.getElementById("nomeAluno");
const inputMatricula = document.getElementById("inputMatricula");
const inputIdade = document.getElementById("inputIdade");
const inputCpf = document.getElementById("inputCpf");
const btnJson = document.getElementById("btnJson");
const jsonOutput = document.getElementById("jsonOutput");

btnJson.onclick = () => {

    if (
        nomeAluno.value === "" ||
        inputMatricula.value === "" ||
        inputIdade.value === "" ||
        inputCpf.value === ""
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const idade = Number(inputIdade.value); 
    if (!Number.isInteger(idade) || idade <= 0) {
        alert("A idade deve ser um número inteiro positivo.");
        return;
    }

    const pessoa = {
        nomeAluno: nomeAluno.value,
        inputMatricula: inputMatricula.value,
        inputIdade: inputIdade.value,
        inputCpf: inputCpf.value
    };

    jsonOutput.textContent = JSON.stringify(pessoa, null, 2);
};
