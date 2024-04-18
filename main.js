
const form = document.getElementById('form')

const  telefoneUsuario = []
const nomeUsuario = []
const emailUsuario = []
const cidadeUsuario = []

let linhas = ''



 // adiciona um ouvinte de eventos para o evento 
form.addEventListener('submit', function(e){ 
    e.preventDefault()   //remove  o comportamento de atuliazar a página
    
    criarLinha()
    
})

function criarLinha(){

    
    const nomeContato = document.getElementById('nome')
    const telefoneContato = document.getElementById('telefone')
    const emailContato = document.getElementById('email')
    const cidadeContato = document.getElementById('cidade')
    const tabelacorpo = document.querySelector('tbody')


    alert( `O Contato de ${nomeContato.value}, da cidade de ${cidadeContato.value}: telefone ${telefoneContato.value} e-mail ${emailContato.value}`)


    nomeUsuario.push(nomeContato.value)
    telefoneUsuario.push(telefoneContato.value)
    emailUsuario.push(emailContato.value)
    cidadeUsuario.push(cidadeContato.value)


    //cria as  tabela
    let linha = '<tr>'
    linha += `<td>${nomeUsuario.value}</td>`
    linha += `<td> ${telefoneUsuario.value} </td>`
    linha += `<td> ${emailUsuario.value} </td>`
    linha += `<td> ${cidadeUsuario.value}</td>`
    linha += '</tr>'
    
    linhas += linha

    tabelacorpo.innerHTML = linhas

}

