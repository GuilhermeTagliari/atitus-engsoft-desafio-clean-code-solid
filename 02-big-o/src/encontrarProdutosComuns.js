// O(n): constrói um Set de listaA em O(n), depois filtra listaB em O(m)
function encontrarProdutosComuns(listaA, listaB) {
  const setA = new Set(listaA);
  return listaB.filter(item => setA.has(item));
}

module.exports = encontrarProdutosComuns;
