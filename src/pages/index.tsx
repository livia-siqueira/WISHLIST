import { getAllProducts } from "../shared/helpers/getProducts";
import { TAllProducts } from "../shared/types";
import List from "./list-products";

export default function Home({ products }: TAllProducts) {
  return <List products={products} />;
}

export async function getStaticProps() {
  const data = await getAllProducts();
  return {
    props: {
      products: data.products,
    },
  };
}
