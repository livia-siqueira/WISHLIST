import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple};
  height: 10rem;

  @media (max-width: 1000px) {
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }
`;

export const AreaRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
