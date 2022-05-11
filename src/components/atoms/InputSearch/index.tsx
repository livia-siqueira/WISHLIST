import { ChangeEvent } from "react";
import { AreaSearch, IconSearch, Input } from "./styles";

interface IPropsInputSearch {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ onSearch }: IPropsInputSearch) => {
  return (
    <AreaSearch>
      <Input placeholder="Busca" onChange={onSearch} data-test="inputSearch" />
      <IconSearch />
    </AreaSearch>
  );
};
