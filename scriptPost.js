//POST
document.querySelector('#cadastrar').addEventListener('click', () => {

    const dadosProdutos = {
        "id": null,
        "nome": document.querySelector('#nomeProduto').value
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosProdutos)
    }).then(resposta => {
        if (resposta.ok){
            window.alert('Produto Cadastrado');
        }else{
            window.alert('Erro');
        }
    })

    
})