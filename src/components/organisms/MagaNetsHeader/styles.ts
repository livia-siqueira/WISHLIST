import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #451776;
  height: 10rem;
  //width: 100%;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
