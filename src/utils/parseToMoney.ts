import { parseToBRL } from "./parseToBRL";

export function parseToMoney(currency: "BRL", value: number) {
  const methods = {
    BRL: () => {
      return parseToBRL(value || 0);
    },
  };

  if (methods[currency]) {
    return methods[currency]();
  }
}
