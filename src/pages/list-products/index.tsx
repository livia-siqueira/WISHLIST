import { ChangeEvent, useCallback, useState } from "react";
import { Layout, ListProducts } from "@/components/templates";
import { Product } from "@/shared/index";

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
