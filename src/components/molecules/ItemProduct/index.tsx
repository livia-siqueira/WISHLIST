import { AiOutlineCloseCircle } from "react-icons/ai";
import { Product } from "@/shared/index";
import {
  ButtonFavorite,
  ButtonRemove,
  Card,
  IconFavorite,
  Price,
  Title,
} from "./styles";

interface IPropsItemProduct {
  product: Product;
  isSelected: boolean;
  onClick: (product: Product) => void;
  page: `Home` | `Wishlist`;
}

export const ItemProduct = ({
  onClick,
  isSelected,
  product,
  page,
}: IPropsItemProduct) => {
  const ButtonHome = (
    <ButtonFavorite
      onClick={() => onClick(product)}
      data-test={`${product.id}`}
    >
      <IconFavorite isSelected={isSelected} />
    </ButtonFavorite>
  );

  const ButtonWishlist: JSX.Element = (
    <ButtonRemove onClick={() => onClick(product)} data-test={`${product.id}`}>
      <AiOutlineCloseCircle size={36} />
    </ButtonRemove>
  );

  const ButtonPage = page === `Home` ? ButtonHome : ButtonWishlist;
  return (
    <Card>
      {ButtonPage}
      <div>
        <img src={product.image} />
        <Title>{product.title}</Title>
      </div>
      <Price>
        {product.currencyFormat}
        {product.price}
      </Price>
    </Card>
  );
};
