import axios from "axios";
import type { NextPage } from "next";
import { getAllProducts } from "../shared/helpers/allProducts";
import { Product } from "../shared/types";
import ListProducts from "./list-products";

export default function Home({ allProducts }: { allProducts: Product[] }) {
  return <ListProducts allProducts={allProducts} />;
}

export async function getStaticProps() {
  const data = await getAllProducts();
  return {
    props: {
      allProducts: data.data,
    },
  };
}
