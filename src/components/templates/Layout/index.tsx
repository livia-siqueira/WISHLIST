import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MagaNetsHeader } from "../../organisms";
import { AreaLinks, Container, Main } from "./styles";

interface IPropsLayout {
  children: ReactNode | ReactNode[];
  ListaDesejos?: boolean;
}

const titlesPages = {
  ListaDesejos: `Lista de desejos`,
};

export const Layout = ({ children, ListaDesejos = false }: IPropsLayout) => {
  const routes = useRouter();
  return (
    <Container>
      <MagaNetsHeader />
      <Main>
        <AreaLinks>
          <a onClick={() => routes.back()}>Home </a>
          <a onClick={() => routes.push("wishlist")}>
            {ListaDesejos && titlesPages["ListaDesejos"]}
          </a>
        </AreaLinks>
        {children}
      </Main>
    </Container>
  );
};
