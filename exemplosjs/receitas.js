let receitas = []

getBuscarDadosJSON()

async function getBuscarDadosJSON(){
    const res = await fetch('./receitas.json')
    receitas = await res.json()
    exibirDadosNaTela(receitas)
}

const elementoParaInserirReceitas = document.getElementById('pnlCatalogo')

function exibirDadosNaTela(receitas){
    elementoParaInserirReceitas.innerHTML = ''
    receitas.forEach(receita => {
        elementoParaInserirReceitas.innerHTML += `
    <div class="receita card bg-white col-md-3 mb-3">
        <img class="card-img-top" src="${receita.imagem}" alt="${receita.alt}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 5px;">
        <div class="card-body">
            <h2 class="card-title">${receita.nome}</h2>
            <hr>
            <h3 class="card-text">Ingredientes</h3>
            <ul>
            ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <hr>
            <h3 class="card-text">Modo de Preparo</h3>
            <p>${receita.preparo}</p>
        </div>
    </div>
        `
    })
}