import { ChangeEvent } from "react";
import { InputSearch } from "../../atoms/InputSearch";
import { Logo } from "../../atoms/Logo";
import { AreaInformantions } from "../../molecules/AreaInformantions";
import { Header } from "./styles";

interface IPropsMagaNetsHeader {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MagaNetsHeader = ({ onSearch }: IPropsMagaNetsHeader) => {
  return (
    <Header>
      <Logo />
      <div>
        <AreaInformantions />
        <InputSearch onSearch={onSearch} />
      </div>
    </Header>
  );
};
