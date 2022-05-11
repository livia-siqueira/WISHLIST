import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/templates/Layout";
import { ListProducts } from "../../components/templates/ListProducts";
import { useStore } from "../../store";

export default function Wishlist() {
  const { wishlist } = useStore();
  const [searchProduct, setSearchProduct] = useState<string>();
  const onSearch = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  }, []);

  return (
    <Layout ListaDesejos onSearch={onSearch}>
      <ListProducts
        listProducts={wishlist}
        page={`Wishlist`}
        searchProduct={searchProduct}
      />
    </Layout>
  );
}
