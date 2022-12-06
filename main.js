const form = document.getElementById('forms');
const contatosNome = [];
const contatosNumeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarContatos();
    atualizaContatos();
})

function adicionarContatos () {

    let nome = document.getElementById('nome');
    let numero = document.getElementById('numero');
    let valorNome = nome.value;
    let valorNumero = numero.value;

    valorNome.split(' ');

    if(valorNome.split(' ').length < 2){
        alert('Adicione um sobrenome')
    } else {
        if(valorNumero.length < 10){
            alert('Adicione um número válido')
        }  else {
            
            if(contatosNumeros.includes(valorNumero)){
                alert(`numero ${valorNumero} já adicionado aos contatos`);
            } else {
    
                contatosNome.push(valorNome);
                contatosNumeros.push(valorNumero)
        
                let linha = `<tr>`;
                linha += `<td>${valorNome}</td>`;
                linha += `<td>${valorNumero}</td>`;
                linha += `</tr>`;
                linhas += linha;
        
                alert(`contato ${valorNome} adicionado na agenda`);   
            }
        } 
    }
            nome.value = '';
            numero.value = '';
}

function atualizaContatos(){
    const contato = document.querySelector('tbody');
    contato.innerHTML = linhas;
}