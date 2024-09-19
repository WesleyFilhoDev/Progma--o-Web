let palavra = document.getElementById('palavra');
let btnSeparar = document.getElementById('separar');
let resultado = document.getElementById('resultado');

function separar() {
    let texto = palavra.value;
    resultado.innerHTML = '';
    
    if (texto) {
        resultado.style.display = 'flex';
        for (let letra of texto) {
            let letraDiv = document.createElement('div'); 
            letraDiv.classList.add('resultado'); 
            letraDiv.textContent = letra; 
            resultado.appendChild(letraDiv);
        }
    } else {
        resultado.style.display = 'none';
    }
}

resultado.style.display = 'none';
btnSeparar.addEventListener('click', separar);
