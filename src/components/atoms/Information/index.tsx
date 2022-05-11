import { useRouter } from "next/router";
import { cloneElement } from "react";
import { ItemInformation, Link } from "./styles";

interface IPropsInformation {
  title: string;
  Icon?: JSX.Element;
}
export const Information = ({ title, Icon }: IPropsInformation) => {
  const routes = useRouter();
  return (
    <ItemInformation>
      {Icon && cloneElement(Icon)}
      <Link onClick={() => routes.push("/wishlist")}>{title}</Link>
    </ItemInformation>
  );
};
