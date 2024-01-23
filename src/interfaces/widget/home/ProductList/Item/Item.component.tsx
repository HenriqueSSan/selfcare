import { memo } from "react";

import { IProduct } from "../../../../../mocks/products";
import { parseToMoney } from "../../../../../utils/parseToMoney";

import s from "./Item.styles.module.scss";

function Item<T extends IProduct>({ id, name, image, price, category }: T) {
  const formatPrice = parseToMoney("BRL", price);

  return (
    <section className={s["product"]}>
      <figure className={s["product__figure"]}>
        <img src={image} alt={name} />
      </figure>

      <div className={s["product__content"]}>
        <div className={s["product__group"]}>
          <h3 className="title">{name}</h3>
          <p>
            <span className="symbol">{formatPrice?.symbol}</span>{" "}
            <span className="price">{formatPrice?.number}</span>
          </p>
        </div>

        <button className={`btn btn-primary btn-solid ${s["product__buy"]}`}>
          Comprar
        </button>
      </div>
    </section>
  );
}

export default memo(Item);
