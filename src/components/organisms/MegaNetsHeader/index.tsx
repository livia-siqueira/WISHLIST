import { InputSearch } from "../../atoms/InputSearch";
import { Logo } from "../../atoms/Logo";
import { AreaInformantions } from "../../molecules/AreaInformantions";
import { Header } from "./styles";

export const MegaNetsHeader = () => {
  return (
    <Header>
      <Logo />
      <div>
        <AreaInformantions />
        <InputSearch />
      </div>
    </Header>
  );
};
