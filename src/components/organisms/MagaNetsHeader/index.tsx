import { ChangeEvent } from "react";
import { InputSearch, Logo } from "@/components/atoms";
import { AreaInformantions } from "@/components/molecules";
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
