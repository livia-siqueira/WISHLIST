import styled from "styled-components";

export const Card = styled.li`
  border: 1px solid gray;
  max-width: 200px;
  min-height: 400px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 1rem;
  gap: 2rem;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const Price = styled.span`
  color: yellow;
  font-weight: bold;
`;

export const Title = styled.span`
  font-size: 1rem;
  text-align: center;
`;
