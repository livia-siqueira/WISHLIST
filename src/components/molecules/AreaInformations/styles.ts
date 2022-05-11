import styled from "styled-components";

export const SectionInfos = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0.4rem;
    justify-content: center;
    width: 100%;
    margin: 0 1rem;
  }
`;
