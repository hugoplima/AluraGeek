import { conexao } from './conexao.js';

const formulario = document.querySelector('[data-formulario]');
const msgErroForm = document.querySelector('[data-mensagem="erro-form"]');

async function mostrarProduto(evento) {
  evento.preventDefault();
  const nome = document.querySelector('[data-nome]').value;
  const preco = document.querySelector('[data-preco]').value;
  const imagemItem = document.querySelector('[data-imagem]');
  const imagem = imagemItem.value;

  if (nome && preco && (imagem.includes('.png') || imagem.includes('.jpg'))) {
    await conexao.criarProduto(nome, preco, imagem);
    msgErroForm.classList.remove('ativo');
    window.location.reload();
  } else {
    msgErroForm.classList.add('ativo');
  }

  if ((imagem && !imagem.includes('.png')) && (imagem && !imagem.includes('.jpg'))) {
    msgErroForm.innerText = 'Adicione uma imagem válida (JPG ou PNG)';
    imagemItem.style.borderColor = 'red';
  } else {
    msgErroForm.innerText = 'Preencha todos os campos para adicionar um produto';
    imagemItem.style.borderColor = 'var(--c1)';
  }
}

formulario.addEventListener('submit', (evento) => {
  mostrarProduto(evento);
});
