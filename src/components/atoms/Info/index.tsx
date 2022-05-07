import { ItemInformation, Link } from "./styles";

interface IPropsInformation {
  title: string;
  Icon?: JSX.Element;
}
export const Information = ({ title, Icon }: IPropsInformation) => {
  return (
    <ItemInformation>
      <Link>{title}</Link>
    </ItemInformation>
  );
};
