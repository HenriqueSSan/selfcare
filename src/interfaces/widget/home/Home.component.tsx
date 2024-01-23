import { Banner } from "./Banner";
import { ProductList } from "./ProductList";

export function WidgetHome() {
  return (
    <main className="page">
      <Banner />
      <ProductList />
    </main>
  );
}
