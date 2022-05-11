import { useEffect, useState } from "react";
import { Product } from "../../../shared/types";
import { useStore } from "../../../store";
import { ItemProduct } from "../../molecules/ItemProduct";
import { List, MessageEmptyProducts } from "./styles";

interface IPropsListsProducts {
  listProducts: Product[];
  page: `Home` | `Wishlist`;
  searchProduct?: string;
}

type TMessages = {
  Home: string;
  Wishlist: string;
};

const messages: TMessages = {
  Home: "Este produto que você está buscando não existe em nossa loja :/",
  Wishlist:
    "Não existem produtos em sua lista de desejos, retorne a página inicial e inicie suas compras :)",
};

export const ListProducts = ({
  listProducts,
  page,
  searchProduct,
}: IPropsListsProducts) => {
  const { wishlist, addProductInWishlist, removeProductInWishlist } =
    useStore();

  const filteredList = listProducts?.filter((productItem) => {
    if (searchProduct?.length === 0 || !searchProduct) {
      return productItem;
    }
    if (
      productItem.title.toLowerCase().includes(searchProduct?.toLowerCase())
    ) {
      return productItem;
    }
  });

  if (listProducts.length === 0 || filteredList?.length === 0) {
    return <MessageEmptyProducts>{messages[page]}</MessageEmptyProducts>;
  }

  return (
    <List>
      {filteredList?.map((product) => {
        const isSelected = wishlist?.includes(product);
        return (
          <ItemProduct
            key={product.id}
            page={page}
            isSelected={isSelected ?? false}
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
