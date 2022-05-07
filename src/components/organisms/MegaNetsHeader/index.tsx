import { InputSearch } from "../../atoms/InputSearch";
import { Logo } from "../../atoms/Logo";
import { AreaInfos } from "../../molecules/AreaInfos";
import { SectionInfos } from "../../molecules/AreaInfos/styles";
import { Header } from "./styles";

export const MegaNetsHeader = () => {
  return (
    <Header>
      <Logo />
      <div>
        <AreaInfos />
        <InputSearch />
      </div>
    </Header>
  );
};
