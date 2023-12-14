document.querySelector('#carregar').addEventListener('click', () => {
    
    fetch('http://localhost:3000/produtos')
    .then((response) => response.json())
    .then((produtos) => {
        let documentProdutos = document.querySelector('#produtos');
        let tituloProdutos = document.createElement('h2');
        
        documentProdutos.innerHTML = ``;
        tituloProdutos.innerHTML = `Produtos`;
        documentProdutos.append(tituloProdutos);

        produtos.forEach(produto => {
            documentProdutos.innerHTML += `<ul><li>ID: ${produto.id}</li><li>NOME: ${produto.nome}</li></ul>`; 
        });
    })
});    
