const nomes = ["Thomaz", "Silva", "Laizo"]
const lista = document.getElementById("lista")

for (let nome of nomes){
    lista.innerHTML += `<li>${nome}</li>`  
}

f = document.getElementById('formulario')
f.addEventListener('submit', function(e){
    e.preventDefault()

    var nome_novo = document.getElementById('novo').value
    if (nome_novo == ''){
        alert('Insira seu nome por favor!')
    }else{
        lista.innerHTML += `<li>${nome_novo}</li>`  
    }
    var botao = document.getElementById('botao')
})