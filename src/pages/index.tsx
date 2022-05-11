import { getAllProducts } from "../shared/helpers/getProducts";
import { Product, TAllProducts } from "../shared/types";
import ListProducts from "./list-products";

export default function Home({ products }: TAllProducts) {
  return <ListProducts products={products} />;
}

export async function getStaticProps() {
  const data = await getAllProducts();
  return {
    props: {
      products: data.products,
    },
  };
}
