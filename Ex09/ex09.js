const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const btSingUp = document.getElementById("btSingUp");

const handleBtSingUpClick = () => {
    const username = inputUsername.value.trim()
        if (!username) {
            alert ("Preecnha o nome do usuário!");
            inputUsername.focus;
            return;
        }

    const password = inputPassword.value.trim()
        if (!password) {
            alert ("Preecnha o campo senha!");
            inputPassword.focus;
            return;
        }
};

btSingUp.onclick = handleBtSingUpClick