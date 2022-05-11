import { ChangeEvent, useCallback, useState } from "react";
import { Layout, ListProducts } from "@/components/templates";
import { useStore } from "@/store/index";

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
