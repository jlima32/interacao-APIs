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
            let ulProduto = document.createElement('ul');
            ulProduto.id = `produto-${produto.id}`;
            ulProduto.classList.add('produto')

            let liIdProduto = document.createElement('li');
            liIdProduto.innerHTML = produto.id;
            liIdProduto.setAttribute('data-test', 'liProduto');
            liIdProduto.setAttribute('data-produto', 'idProduto');

            let liNomeProduto = document.createElement('li');
            liNomeProduto.innerHTML = produto.nome;
            liNomeProduto.setAttribute('data-produto', 'nomeProduto');

            let liTipoProduto = document.createElement('li');
            liTipoProduto.innerHTML = produto.tipo;
            liTipoProduto.setAttribute('data-produto', 'tipoProduto');

            documentProdutos.appendChild(ulProduto).append(liIdProduto, liNomeProduto, liTipoProduto);

        });


    })

        
    document.querySelector('#produtos').addEventListener('click', event => {
        if (event.target.closest('ul').classList.contains('produto'))
        
            document.querySelector('#idProduto').value = event.target.closest('ul').querySelector('[data-produto="idProduto"]').innerHTML;

            document.querySelector('#nomeProduto').value = event.target.closest('ul').querySelector('[data-produto="nomeProduto"]').innerHTML;

            document.querySelector('#tipoProduto').value = event.target.closest('ul').querySelector('[data-produto="tipoProduto"]').innerHTML;

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

// document.querySelector('#remover').addEventListener('click', () => {

    
//     const idProduto = document.querySelector('#idProduto').value;

//     fetch(`http://localhost:3000/produtos/${idProduto}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(resposta => {
//         if (resposta.ok){
//             window.alert('Produto Removido!');
//             buscaProdutos();
//         }else{
//             window.alert('Erro');
//         }
//     })

    
// })
