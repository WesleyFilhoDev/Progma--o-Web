const inputDescription = document.getElementById("inputDescription");
const inputValue = document.getElementById("inputValue");
const btnAdd = document.getElementById("btnAdd");
const olDespesas = document.getElementById("olDespesas");
const totalDespesa = document.getElementById("totalDespesa")

const baseUrl = "https://parseapi.back4app.com/classes/Despesas"
const headers = {
    "X-Parse-Application-Id": "FoiLtF16lh4W3jDFSrDEMTwGPRq0tn0zgWC7v65K" ,
    "X-Parse-REST-API-Key": "ao0CJ2bPxFEkhUTIplqDB4OBBO4vb2AfpzLn7zm3" ,
};
const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

const getDespesas = async () => {
    const response = await fetch(baseUrl,{
        method: "GET", 
        headers
    });

    const data = await response.json();
    olDespesas.innerHTML = "";
    let total = 0;

    data.results.forEach((despesa) => {
        const li = document.createElement("li");
        li.textContent = `${despesa.descricao}: R$${despesa.valor.toFixed(2)}`;

        const inputNewValue = document.createElement("input");
        inputNewValue.type = "number";
        inputNewValue.value = despesa.valor;
        li.appendChild(inputNewValue);

        const btnRefresh = document.createElement("button")
        btnRefresh.textContent = "Atualizar"
        btnRefresh.style.backgroundColor = 'green'
        btnRefresh.onclick = () => refreshDespesa(despesa.objectId, inputNewValue.value);
        li.appendChild(btnRefresh);

        const btnDelete = document.createElement("button")
        btnDelete.textContent = "Deletar"
        btnDelete.style.backgroundColor = 'red'
        btnDelete.onclick = () => deletedespesa(despesa.objectId);
        li.appendChild(btnDelete);

        olDespesas.appendChild(li);
        total += despesa.valor
    });

    totalDespesa.textContent = total.toFixed(2);
};

const addDespesa = async () => {
    let descricao = inputDescription.value;
    const valor = parseFloat(inputValue.value);
    if (!descricao || isNaN(valor)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    descricao = descricao.toUpperCase();

    const newdespesa = {descricao, valor};
    await fetch(baseUrl, {
        method: "POST",
        headers: headersJson, 
        body: JSON.stringify(newdespesa),
    });

    inputDescription.value = ""
    inputValue.value = "";
    getDespesas();
};

const deletedespesa = async (id) => {
    await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers
    });
    getDespesas();
};

const refreshDespesa = async (id, novoValor) => {
    if (isNaN(novoValor) || novoValor <= 0) {
      alert("Insira um valor válido!");
      return;
    }

    await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: headersJson,
      body: JSON.stringify({ valor: parseFloat(novoValor) }),
    });
    getDespesas();
};

window.onload = getDespesas;
btnAdd.onclick = addDespesa;
