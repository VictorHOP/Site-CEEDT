var dados = [
    {id: 1,nome: "ADS"},
    {id: 1,nome: "Jogos Digitais"},
    {id: 1,nome: "Sistemas de informação"},
    {id: 1,nome: "Ciência de dados"},
    {id: 1,nome: "Ciência da computação"},
];

function montarTabela() {
    var tbody = document.getElementById('tb-body');

    var html = "";
    for(let item of dados) {
        html += `<tr>
                    <td><input type="checkbox" data-id="${item.id}" /></td>
                    <td>${item.nome}</td>
                    <td class="d-flex align-items-center justify-content-center"><a class="btnExcluir" style="cursor:pointer;" onclick="excluir(${item.id})"><?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="10px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="10px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg></a></td>
                </tr>`;
    }

    tbody.innerHTML = html;

}


function adicionarItem() {
    var nomeInput = document.getElementById("txt-texto");

    var novoItem = {
        id: new Date().getTime(), //valor de exemplo para o ID
        nome: nomeInput.value
    }

    dados.push(novoItem);
    montarTabela();
    nomeInput.value = "";
}


function excluir(id) {

    var dadosAuxiliar = [];
    for(var i = 0; i < dados.length; i++){
        if(dados[i].id != id)
            dadosAuxiliar.push(dados[i]);
    }

    dados = dadosAuxiliar;
    montarTabela();
}

function selecionarTodos() {

    var checkboxes = document.querySelectorAll('[data-id]');
    var cbPai = document.getElementById('ckTodos');

    for(var checkbox of checkboxes){
        checkbox.checked = cbPai.checked;
    }

}

function excluirSelecionado() {

    var checkboxes = document.querySelectorAll('[data-id]');

    for(let checkbox of checkboxes) {
        if(checkbox.checked == true) {
            excluir(checkbox.dataset.id);
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    montarTabela();

    var btnAdd = document.getElementById("txt-add");
    btnAdd.addEventListener("click", adicionarItem);

    var cb = document.getElementById('ckTodos');
    cb.addEventListener("change", selecionarTodos);

    var btnExcluirSelecionados = document.getElementById('btnExcluirSelecionados');
    btnExcluirSelecionados.addEventListener('click', excluirSelecionado);

});
