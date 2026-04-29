const CalculadoraDeTotal = require('./CalculadoraDeTotal');
const RepositorioDePedidos = require('./RepositorioDePedidos');
const NotificadorDeEmail = require('./NotificadorDeEmail');

// SRP: orquestra o fluxo; DIP: dependências injetadas pelo construtor
class SistemaDeVendas {
  constructor(
    calculadora = new CalculadoraDeTotal(),
    repositorio = new RepositorioDePedidos(),
    notificador = new NotificadorDeEmail()
  ) {
    this.calculadora = calculadora;
    this.repositorio = repositorio;
    this.notificador = notificador;
  }

  async processarVenda(pedido) {
    if (!pedido.itens || pedido.itens.length === 0) throw new Error("Pedido sem itens");

    const total = this.calculadora.calcular(pedido.itens);
    await this.repositorio.salvar(pedido);
    await this.notificador.notificar(pedido.clienteEmail);

    return { ...pedido, total, status: "pago" };
  }
}

module.exports = SistemaDeVendas;
