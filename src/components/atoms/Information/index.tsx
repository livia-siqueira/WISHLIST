import { cloneElement } from "react";
import { ItemInformation, Link } from "./styles";

interface IPropsInformation {
  title: string;
  Icon?: JSX.Element;
}
export const Information = ({ title, Icon }: IPropsInformation) => {
  return (
    <ItemInformation>
      {Icon && cloneElement(Icon)}
      <Link>{title}</Link>
    </ItemInformation>
  );
};
