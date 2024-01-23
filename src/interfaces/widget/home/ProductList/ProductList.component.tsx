import { Fragment, useState } from "react";

import { Headline } from "./Headline";

import { mockProducts } from "../../../../mocks/products";

export function ProductList() {
  const [products, setProducts] = useState(() => mockProducts);

  return (
    <Fragment>
      <div>
        <Headline products={products} />
      </div>
    </Fragment>
  );
}
