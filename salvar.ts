
function save(){
    const matriculaInput = document.getElementById("idMatricula") as HTMLInputElement;
    const telefoneInput = document.getElementById("idTelefone") as HTMLInputElement;
    const estadoInput = document.getElementById("estado") as HTMLSelectElement;
    const municipioInput = document.getElementById("municipio") as HTMLSelectElement;
    const veiculoInput = document.getElementById("veiculo") as HTMLInputElement;

    const pessoa = {
        id: crypto.randomUUID(),
        matricula: matriculaInput.value,
        telefone: telefoneInput.value, 
        estado: estadoInput.value, 
        municipio: municipioInput.value,
        veiculo: veiculoInput.value
    }


    matriculaInput.value ="0"
    telefoneInput.value="0"
    estadoInput.value = "0"
    municipioInput.value="0"
    veiculoInput.value ="0"
    

    
    console.log(pessoa)
    localStorage.setItem('produtos', JSON.stringify(pessoa))

    
    


}
