async function jsonLista() {
  const conexao = await fetch('https://66704aa40900b5f8724a1ab3.mockapi.io/api/v1/produtos');
  const respostaConexao = await conexao.json();

  return respostaConexao;
}

async function criarProduto(nome, preco, imagem) {
  const conexao = await fetch('https://66704aa40900b5f8724a1ab3.mockapi.io/api/v1/produtos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      preco,
      imagem,
    }),
  });

  const respostaConexao = await conexao.json();

  return respostaConexao;
}

async function excluirProduto(id) {
  try {
    const conexao = await fetch(`https://66704aa40900b5f8724a1ab3.mockapi.io/api/v1/produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!conexao.ok) {
      throw new Error('Erro na requisição');
    }

    const respostaConexao = await conexao.json();

    window.location.reload();

    return respostaConexao;
  } catch (erro) {
    alert('Erro ao deletar o produto', erro);
  }
}

export const conexao = {
  jsonLista,
  criarProduto,
  excluirProduto,
};
