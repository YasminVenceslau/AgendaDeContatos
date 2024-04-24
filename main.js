
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
    
    const nomeFormatado = FormatarNome() // Armazena o nome formatado em uma variável
    criarLinha(nomeFormatado) // Passa o nome formatado como argumento para a função criarLinha
    atualizarTabela()
    
})

function FormatarNome(){

    // Obtenha o valor do campo de nome do formulário
    const nomeContato = document.getElementById('nome').value;
    
    //divide o nome separando os em espaço
    const palavras = nomeContato.split(' ')

    //transfomar o inicio da palavra em letra maiúscula
    const nomeFormatado = palavras.map(palavras => {
        if (palavras.length > 0){
            return palavras.charAt(0).toUpperCase() + palavras.slice(1).toLowerCase()
        }else{
            return palavras
        }
    })

    //Juntas as palavras formatadas
    return nomeFormatado.join(' ')

}



function criarLinha(nomeFormatado){

     // Obtenha os valores das entradas do formulário
    
    const telefoneContato = document.getElementById('telefone').value
    const emailContato = document.getElementById('email').value
    const cidadeContato = document.getElementById('cidade').value
    
    //verifica se nomeUsuario é incluido como mesmo valor
    if (telefoneUsuario.includes(telefoneContato)){
        alert(`O telefone${telefoneContato}, já foi inserido `)
        return
    }else{

        // Adiciona os valores aos arrays correspondentes
        nomeUsuario.push(nomeFormatado)
        telefoneUsuario.push(telefoneContato)
        emailUsuario.push(emailContato)
        cidadeUsuario.push(cidadeContato)

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
    nomeUsuario = 0
    telefoneContato = 0
    emailUsuario = 0
    cidadeUsuario = 0

}