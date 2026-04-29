// anosCadastro > 5 equivale a >= 6; valorMin é exclusivo (valor > valorMin)
const TABELA_DESCONTOS = [
  { tipo: 'premium', valorMin: 1000, anosMin: 6, taxa: 0.20 },
  { tipo: 'premium', valorMin: 1000, anosMin: 0, taxa: 0.15 },
  { tipo: 'premium', valorMin: 500,  anosMin: 0, taxa: 0.10 },
  { tipo: 'premium', valorMin: 0,    anosMin: 0, taxa: 0.05 },
  { tipo: 'gold',    valorMin: 1000, anosMin: 0, taxa: 0.10 },
  { tipo: 'gold',    valorMin: 0,    anosMin: 0, taxa: 0.02 },
];

function calcularDesconto(cliente, valor) {
  const regra = TABELA_DESCONTOS.find(r =>
    r.tipo === cliente.tipo &&
    valor > r.valorMin &&
    (cliente.anosCadastro || 0) >= r.anosMin
  );
  return regra ? valor * regra.taxa : 0;
}

module.exports = calcularDesconto;
