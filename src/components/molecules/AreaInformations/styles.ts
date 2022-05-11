import styled from "styled-components";

export const SectionInfos = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  //width: 40rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.4rem;
    justify-content: center;
    width: 100%;
    margin: 0 1rem;
  }
`;
