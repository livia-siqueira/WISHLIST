import { ChangeEvent } from "react";
import { InputSearch } from "../../atoms/InputSearch";
import { Logo } from "../../atoms/Logo";
import { AreaInformantions } from "../../molecules/AreaInformations";
import { AreaRight, Header } from "./styles";

interface IPropsMagaNetsHeader {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MagaNetsHeader = ({ onSearch }: IPropsMagaNetsHeader) => {
  return (
    <Header>
      <Logo />
      <AreaRight>
        <AreaInformantions />
        <InputSearch onSearch={onSearch} />
      </AreaRight>
    </Header>
  );
};
