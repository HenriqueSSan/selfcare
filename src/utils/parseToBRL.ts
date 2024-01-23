export function parseToBRL(value: number) {
  const conversion = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  const number = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    currency: "BRL",
  });

  const symbol = "R$";

  return {
    conversion,
    symbol,
    number,
    value,
  };
}
