import { useRouter } from "next/router";
import { ChangeEvent, ReactNode } from "react";
import { MagaNetsHeader } from "../../organisms";
import { AreaLinks, Container, Main } from "./styles";

interface IPropsLayout {
  children: ReactNode | ReactNode[];
  ListaDesejos?: boolean;
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const titlesPages = {
  ListaDesejos: ` Lista de desejos`,
};

export const Layout = ({
  children,
  ListaDesejos = false,
  onSearch,
}: IPropsLayout) => {
  const routes = useRouter();
  return (
    <Container>
      <MagaNetsHeader onSearch={onSearch} />
      <Main>
        <AreaLinks>
          <a onClick={() => routes.back()}>Home {`>`} </a>
          <a onClick={() => routes.push("wishlist")}>
            {ListaDesejos && titlesPages["ListaDesejos"]}
          </a>
        </AreaLinks>
        {children}
      </Main>
    </Container>
  );
};
