import { Layout } from "../../components/templates/Layout";
import { ListProducts } from "../../components/templates/ListProducts";
import { useStore } from "../../store";

export default function Wishlist() {
  const { wishlist } = useStore();
  return (
    <Layout ListaDesejos>
      <ListProducts listProducts={wishlist} page={`Wishlist`} />
    </Layout>
  );
}
