import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

interface Icon {
  isSelected: boolean;
}

export const Card = styled.li`
  border: 1px solid gray;
  width: 250px;
  height: 400px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem;

  img {
    width: 100px;
    height: 100px;
  }

  span {
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0;
  }
  position: relative;

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    height: 150px;
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

export const ButtonFavorite = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  width: 30px;
  height: 60px;
  top: 0;
  left: 0.3rem;
  background-color: black;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 20px;
    width: 35px;
    background-color: white;
  }
  &::before {
    left: 0;
    transform: skewY(30deg);
    transform-origin: bottom left;
  }
  &::after {
    right: 0;
    transform: skewY(-30deg);
    transform-origin: bottom right;
  }
`;

export const IconFavorite = styled(AiFillHeart)<Icon>`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  top: 15px;
  color: ${({ isSelected }) => (!isSelected ? "#fff" : "red")};
`;

export const ButtonRemove = styled.button`
  background-color: transparent;
  border: initial;
  position: absolute;
  top: 0;
  right: 0;
`;
