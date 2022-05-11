import { Layout } from "../../components/templates/Layout";
import { ListProducts } from "../../components/templates/ListProducts";
import { Product } from "../../shared/types";

interface IPropsListProducts {
  products: Product[];
}

export default function List({ products }: IPropsListProducts) {
  return (
    <Layout>
      <ListProducts listProducts={products} page={`Home`} />
    </Layout>
  );
}
