function verificaCel(data) {
    var retorna = document.getElementById('cel');
    const regexCel = new RegExp('^[0-9]{10,11}$');
    if (regexCel.test(data)) {
        retorna.style.color = "green"
    }
    else {
        retorna.style.color = "red"
    }
}

function verificaEmail(data) {
    var retorna = document.getElementById('email');
    const regexEmail = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/);
    if (regexEmail.test(data)) {
        retorna.style.color = "green"
    }
    else {
        retorna.style.color = "red"
    }
}

function validarCPF() {
    var input = event.target;
    var cpf = input.value;
    var ok = 1;
    var add;
    cpf
    if (cpf != "") {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            ok = 0;
        if (ok == 1) {
            add = 0;
            for (i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                ok = 0;
            if (ok == 1) {
                add = 0;
                for (i = 0; i < 10; i++)
                    add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                    rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                    ok = 0;
            }
        }
        if (ok == 0) {
            input.style.color = "red";
            //event.target.value = "";
            //event.target.focus();
        }
        else
            input.style.color = "green";
    }
}

function verificaCEP(data) {
    var retorna = document.getElementById('cep');
    const regexCEP = new RegExp('^[0-9]{8}$');
    if (regexCEP.test(data)) {
        retorna.style.color = "green"
    }
    else {
        retorna.style.color = "red"
    }
}

function verificaNome() {
    var inputnome = document.getElementById("primeiroNome");
    var nome = document.getElementById("primeiroNome").value;

    var padrao = /[^a-zà-ú]+$/gi;

    var valida_nome = nome.match(padrao);

    // Nome possui caracteres inválidos ou é vazio
    if (valida_nome || !nome) {
        inputnome.style.color = "red";
    } else {
        inputnome.style.color = "green";
    }
}
function verificasobreNome() {
    var inputsobrenome = document.getElementById("sobrenome");
    var sobrenome = document.getElementById("sobrenome").value;

    var padrao = /[^a-zà-ú]+$/gi;

    var valida_sobrenome = sobrenome.match(padrao);
    // Sobrenome possui caracteres inválidos ou é vazio
    if (valida_sobrenome || !sobrenome) {
        inputsobrenome.style.color = "red";
    } else {
        inputsobrenome.style.color = "green";
    }
}