import { ChangeEvent, useCallback, useState } from "react";
import { Layout } from "../../components/templates/Layout";
import { ListProducts } from "../../components/templates/ListProducts";
import { Product } from "../../shared/types";

interface IPropsListProducts {
  products: Product[];
}

export default function List({ products }: IPropsListProducts) {
  const [searchProduct, setSearchProduct] = useState<string>();
  const onSearch = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  }, []);
  return (
    <Layout onSearch={onSearch}>
      <ListProducts
        listProducts={products}
        page={`Home`}
        searchProduct={searchProduct}
      />
    </Layout>
  );
}
