import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/templates/Layout";
import { Product } from "../../shared/types";

interface IPropsListProducts {
  allProducts: Product[];
}

export default function ListProducts({ allProducts }: IPropsListProducts) {
  console.log(allProducts);
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}
