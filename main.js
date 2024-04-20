
const form = document.getElementById('form')

const telefoneUsuario = []
const nomeUsuario = []
const emailUsuario = []
const cidadeUsuario = []
const tbhy= []
let linhas = ''



 // adiciona um ouvinte de eventos para o evento 
form.addEventListener('submit', function(e) { 
    e.preventDefault()   //remove  o comportamento de atuliazar a página
    
    criarLinha()
    
    atualizarTabela()
    
})

function criarLinha(){

     // Obtenha os valores das entradas do formulário
    const nomeContato = document.getElementById('nome').value
    const telefoneContato = document.getElementById('telefone').value
    const emailContato = document.getElementById('email').value
    const cidadeContato = document.getElementById('cidade').value
    
    // Adiciona os valores aos arrays correspondentes
    nomeUsuario.push(nomeContato)
    telefoneUsuario.push(telefoneContato)
    emailUsuario.push(emailContato)
    cidadeUsuario.push(cidadeContato)

    

    //verifica se nomeUsuario é incluido como mesmo valor
    if (tbhy.includes(telefoneUsuario.value)){
        alert(`O telefone${telefoneUsuario}, já foi inserido `)
        return
    }else{
        //cria as  tabela
        let linha = '<tr>'
        linha += `<td>${nomeUsuario[nomeUsuario.length - 1]}</td>`
        linha += `<td> ${telefoneUsuario[telefoneUsuario.length - 1]} </td>`
        linha += `<td> ${emailUsuario[emailUsuario.length - 1]} </td>`
        linha += `<td> ${cidadeUsuario[cidadeUsuario.length - 1]}</td>`
        linha += '</tr>'

        // Adiciona a linha à variável 
        linhas += linha

    }
    

}


function atualizarTabela(){
    // Atualiza o corpo da tabela 
    const tabelacorpo = document.querySelector('tbody')

    tabelacorpo.innerHTML = linhas

     // Limpa o formulário após a submissão
    form.reset()

    // Limpa os arrays
    nomeUsuario =''
    telefoneContato = ''
    emailUsuario = ''
    cidadeUsuario = ''

}