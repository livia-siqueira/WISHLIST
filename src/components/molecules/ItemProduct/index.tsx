import { Card, Price, Title } from "./styles";

interface IPropsItemProduct {
  price: number;
  image: string;
  title: string;
  currency: string;
}

export const ItemProduct = ({
  price,
  image,
  title,
  currency,
}: IPropsItemProduct) => {
  return (
    <Card>
      <img src={image} />
      <Title>{title}</Title>
      <Price>
        {currency}
        {price}
      </Price>
    </Card>
  );
};
