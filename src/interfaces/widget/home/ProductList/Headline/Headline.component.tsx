import { IProduct } from "../../../../../mocks/products";

import s from "./Headline.styles.module.scss";

type Headline = {
  products: IProduct[];
};

export function Headline<T extends Headline>({ products }: T) {
  return (
    <div className={`${s["group"]}`}>
      <div className="container">
        <h2>Promoção</h2>

        <p>{products.length} produtos</p>
      </div>
    </div>
  );
}
