import styled from "styled-components";
import { Theme } from "./Theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Theme.white};
  & .pokemon {
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .pokedex{
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
