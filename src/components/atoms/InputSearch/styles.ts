import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  outline: none;
  border: none;
  padding-left: 1.5rem;

  ::placeholder {
    font-weight: bold;
    color: gray;
  }
`;

export const AreaSearch = styled.div`
  position: relative;
`;

export const IconSearch = styled(BiSearch)`
  color: gray;
  position: absolute;
  left: 4px;
  width: 1rem;
  height: 1rem;
  top: 1rem;
`;
