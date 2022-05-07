import { ReactNode } from "react";
import { MegaNetsHeader } from "../../organisms";
import { Container, Main } from "./styles";

interface IPropsLayout {
  children: ReactNode | ReactNode[];
}

export const Layout = ({ children }: IPropsLayout) => {
  return (
    <Container>
      <MegaNetsHeader />
      <Main>{children}</Main>
    </Container>
  );
};
