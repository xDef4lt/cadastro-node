const formButton = document.querySelector('#form-btn');

formButton.addEventListener('click', () => {
    const inputEmail = document.querySelector('#input-email');
    const inputName = document.querySelector('#input-name');

    const inputPassword = document.querySelector('#input-password');
    const confirmPassword = document.querySelector('#input-confirm-password');

    const inputAddress = document.querySelector('#input-address');
    
    if (inputEmail.value === '') {
        inputEmail.style.borderBottomColor = 'red';

        alert('Há erros no formulário!');

    } else  {
        let validarEmail;
        for (let letter in inputEmail) {
            if (inputEmail[letter] === '@') {
                validarEmail = true;

            } else {
                validarEmail = false;
            }
        }

        if (!validarEmail) {
            inputEmail.style.borderBottomColor = 'red';

            alert('Erro: por favor, informe um email com o modelo "nomeemail@gmail.com"');
        }
    }

    if (inputName.value === '') {
        inputName.style.borderBottomColor = 'red';

        alert('Há erros no formulário!');
    }

    if (inputPassword.value === '' || confirmPassword.value === '') {
        inputPassword.style.borderBottomColor = 'red';

        alert('Há erros no formulário!');

    } else if (inputPassword.value !== confirmPassword.value) {
        inputPassword.style.borderBottomColor = 'red';
        confirmPassword.style.borderBottomColor = 'red';

        alert('Erro: As senhas não coincidem.');

    } else if (inputPassword.length < 8) {
        alert('Erro: A senha precisa ter no mínimo 8 caracteres, incluindo símbolos, números e letras.');
    }

    if (inputAddress.value === '') {
        inputAddress.style.borderBottomColor = 'red';

        alert('Há erros no formulário!');
    }
});