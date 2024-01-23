import { Fragment, useState } from "react";

import { Headline } from "./Headline";
import { Item } from "./Item";

import { IProduct, mockProducts } from "../../../../mocks/products";

import s from "./ProductList.styles.module.scss";

export function ProductList() {
  const [products, setProducts] = useState(() => mockProducts);

  return (
    <Fragment>
      <section>
        <Headline products={products} />

        <div className="container">
          <div className={s["product__list"]}>
            {products.map(({ id, name, image, price, category }: IProduct) => {
              return (
                <Item
                  id={id}
                  key={id}
                  name={name}
                  image={image}
                  price={price}
                  category={category}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
