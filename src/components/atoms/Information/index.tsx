import { useRouter } from "next/router";
import { cloneElement } from "react";
import { ItemInformation, Link } from "./styles";

interface IPropsInformation {
  title: string;
  Icon?: JSX.Element;
}

export const Information = ({ title, Icon }: IPropsInformation) => {
  const routes = useRouter();

  const textCypress = title === "Lista de desejos" ? "wishlist" : title;
  return (
    <ItemInformation>
      {Icon && cloneElement(Icon)}
      <Link
        onClick={() => routes.push("/wishlist")}
        data-test={`${textCypress}`}
      >
        {title}
      </Link>
    </ItemInformation>
  );
};
