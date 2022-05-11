import { ItemProduct } from "../../components/molecules/ItemProduct";
import { Layout } from "../../components/templates/Layout";
import { Product, TAllProducts } from "../../shared/types";
import { List } from "./styles";

interface IPropsListProducts {
  products: Product[];
}

export default function ListProducts({ products }: IPropsListProducts) {
  console.log(products);
  return (
    <Layout>
      <h1>Home</h1>
      <List>
        {products.map((product) => (
          <ItemProduct
            price={product.price}
            image={product.image}
            title={product.title}
            currency={product.currencyFormat}
          />
        ))}
      </List>
    </Layout>
  );
}
