import { ReactNode } from "react";
import { MagaNetsHeader } from "../../organisms";
import { Container, Main } from "./styles";

interface IPropsLayout {
  children: ReactNode | ReactNode[];
}

export const Layout = ({ children }: IPropsLayout) => {
  return (
    <Container>
      <MagaNetsHeader />
      <Main>{children}</Main>
    </Container>
  );
};
