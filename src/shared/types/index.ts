export type Product = {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: object;
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
  image: string;
};
