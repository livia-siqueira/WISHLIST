import { getAllProducts, TAllProducts } from "@/shared/index";
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
