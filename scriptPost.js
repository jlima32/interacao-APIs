//GET
function buscaProdutos() {    
    fetch('http://localhost:3000/produtos')
    .then((response) => response.json())
    .then((produtos) => {
        let documentProdutos = document.querySelector('#produtos');
        let tituloProdutos = document.createElement('h2');
        
        documentProdutos.innerHTML = ``;
        tituloProdutos.innerHTML = `Produtos`;
        documentProdutos.append(tituloProdutos);

        produtos.forEach(produto => {
            documentProdutos.innerHTML += `<ul><li>ID: ${produto.id}</li><li>NOME: ${produto.nome}</li><li>TIPO: ${produto.tipo ? produto.tipo : ""}</li></ul>`; 
        });
    })
};

buscaProdutos();      

//POST
document.querySelector('#cadastrar').addEventListener('click', () => {

    const dadosProdutos = {
        "id": null,
        "nome": document.querySelector('#nomeProduto').value,
        "tipo": document.querySelector('#tipoProduto').value
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
            buscaProdutos();
        }else{
            window.alert('Erro');
        }
    })

    
})


//PUT
document.querySelector('#atualizar').addEventListener('click', () => {

    const dadosProdutos = {
        "id": null,
        "nome": document.querySelector('#nomeProduto').value,
        "tipo": document.querySelector('#tipoProduto').value
    }

    const idProduto = document.querySelector('#idProduto').value;

    fetch(`http://localhost:3000/produtos/${idProduto}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosProdutos)
    }).then(resposta => {
        if (resposta.ok){
            window.alert('Produto Atualizado');
            buscaProdutos();
        }else{
            window.alert('Erro');
        }
    })

    
})



//PUT
document.querySelector('#remover').addEventListener('click', () => {

    
    const idProduto = document.querySelector('#idProduto').value;

    fetch(`http://localhost:3000/produtos/${idProduto}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resposta => {
        if (resposta.ok){
            window.alert('Produto Removido!');
            buscaProdutos();
        }else{
            window.alert('Erro');
        }
    })

    
})
