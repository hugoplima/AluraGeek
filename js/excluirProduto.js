import { conexao } from './conexao.js';

async function excluirProduto() {
  await conexao.jsonLista();
  const listaBtn = document.querySelectorAll('[data-excluir]');
  const arrayBtn = Array.from(listaBtn);

  arrayBtn.forEach((btn) => {
    btn.addEventListener('click', (evento) => {
      const card = evento.target.closest('.lista-item');
      const cardId = card.getAttribute('id');
      const confirmacao = window.confirm('Tem certeza que deseja excluir o produto?');

      if (confirmacao) {
        conexao.excluirProduto(cardId);
      }
    });
  });
}

excluirProduto();
