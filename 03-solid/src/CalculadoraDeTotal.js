class CalculadoraDeTotal {
  calcular(itens) {
    const subtotal = itens.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
    return subtotal > 1000 ? subtotal * 0.9 : subtotal;
  }
}

module.exports = CalculadoraDeTotal;
