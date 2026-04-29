class RepositorioDePedidos {
  async salvar(pedido) {
    console.log(`Salvando pedido ${pedido.id}...`);
  }
}

module.exports = RepositorioDePedidos;
