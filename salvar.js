"use strict";
function save() {
    const matriculaInput = document.getElementById("idMatricula");
    const telefoneInput = document.getElementById("idTelefone");
    const estadoInput = document.getElementById("estado");
    const municipioInput = document.getElementById("municipio");
    const veiculoInput = document.getElementById("veiculo");
    const pessoa = {
        id: crypto.randomUUID(),
        matricula: matriculaInput.value,
        telefone: telefoneInput.value,
        estado: estadoInput.value,
        municipio: municipioInput.value,
        veiculo: veiculoInput.value
    };
    matriculaInput.value = "0";
    telefoneInput.value = "0";
    estadoInput.value = "0";
    municipioInput.value = "0";
    veiculoInput.value = "0";
    console.log(pessoa);
    localStorage.setItem('produtos', JSON.stringify(pessoa));
}
