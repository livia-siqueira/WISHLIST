import { Product } from "../../../shared/types";
import { useStore } from "../../../store";
import { ItemProduct } from "../../molecules/ItemProduct";
import { List } from "./styles";

interface IPropsListsProducts {
  listProducts: Product[];
  page: `Home` | `Wishlist`;
}

export const ListProducts = ({ listProducts, page }: IPropsListsProducts) => {
  const { wishlist, addProductInWishlist, removeProductInWishlist } =
    useStore();

  if (listProducts.length === 0) {
    return <p>Não existem itens na sua lista de desejo</p>;
  }
  return (
    <List>
      {listProducts.map((product) => {
        const isSelected = wishlist.includes(product);
        return (
          <ItemProduct
            page={page}
            isSelected={isSelected}
            onClick={
              isSelected ? removeProductInWishlist : addProductInWishlist
            }
            product={product}
          />
        );
      })}
    </List>
  );
};
