import { conexao } from './conexao.js';

const lista = document.querySelector('[data-lista]');
const msgListaVazia = document.querySelector('[data-mensagem="lista-vazia"]');

function construirProduto(nome, preco, imagem, id) {
  const produto = document.createElement('li');
  produto.classList.add('lista-item');
  produto.setAttribute('id', id);
  produto.innerHTML = `
    <img src="${imagem}" alt="${nome}">
    <div class="item-desc">
      <h3>${nome}</h3>
      <div class="item-info">
        <p>$ ${preco},00</p>
        <img src="/assets/icon-trash.svg" alt="Ícone de deletar" data-excluir>
      </div>
    </div>
  `;

  return produto;
}

async function listaProdutos() {
  const listaApi = await conexao.jsonLista();

  listaApi.forEach((item) => {
    lista.appendChild(construirProduto(item.nome, item.preco, item.imagem, item.id));
  });

  if (listaApi.length) {
    msgListaVazia.style.display = 'none';
  }
}

listaProdutos();
