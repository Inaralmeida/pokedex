import styled from "styled-components";
import { Theme } from "../../Styles/Theme";

export const Pokedex = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  position: absolute;

  & .bottom,
  & .top {
    width: 370px;
    height: 150px;
    background-color: ${Theme.red};
    animation: ${(p) =>
        p.pokedexAberta
          ? "heigthBorderPokedexOpen"
          : "heigthBorderPokedexClose"}
      2s forwards;
    z-index: 2;
  }

  & .top {
    border-radius: 15px 15px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    > img {
      width: ${(p) => (p.pokedexAberta ? "30%" : "50%")};
      transition: all 2s;
    }
  }
  & .bottom {
    border-radius: 5px 5px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    > img {
      width: ${(p) => (p.pokedexAberta ? "30%" : "50%")};
      transition: all 2s;
    }
  }

  & .Button-Pokedex-Open {
    width: 130px;
    position: absolute;
    top: 85px;
    cursor: pointer;
    border-radius: 50%;
    :hover {
      opacity: 3px;
    }
    z-index: 3;
    animation: ${(p) => (p.pokedexAberta ? "upButton" : "downButton")} 2s
      forwards;
  }

  & .vidro {
    height: 0;
    width: 100%;
    background: linear-gradient(
        206.02deg,
        rgba(111, 198, 236, 0.25) 71.86%,
        rgba(255, 255, 255, 0.25) 98.64%
      ),
      linear-gradient(
        30.82deg,
        rgba(111, 198, 236, 0.8) 73.74%,
        rgba(255, 255, 255, 0.8) 106.94%
      );
    animation: ${(p) => (p.pokedexAberta ? "openVidro" : "closeVidro")} 2s
      forwards;
  }
  @keyframes openVidro {
    100% {
      height: 70vh;
    }
  }

  @keyframes closeVidro {
    0% {
      height: 70vh;
    }
    100% {
      height: 0px;
    }
  }

  @keyframes heigthBorderPokedexOpen {
    0% {
      height: 150px;
    }
    100% {
      height: 80px;
    }
  }
  @keyframes heigthBorderPokedexClose {
    0% {
      height: 80px;
    }
    100% {
      height: 150px;
    }
  }

  @keyframes upButton {
    0% {
      top: 85px;
      width: 130px;
    }
    100% {
      top: 40px;
      width: 79px;
    }
  }
  @keyframes downButton {
    0% {
      top: 40px;
      width: 79px;
    }
    100% {
      top: 85px;
      width: 130px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > header {
    width: 100%;
    padding: 10px;
    height: 50px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    > input {
      width: 83%;
      height: 30px;
      padding-left: 10px;
      border-radius: 5px;
      border: none;
    }

    > .icon {
      font-size: 20px;
      margin-left: 10px;
      cursor: pointer;
      color: ${Theme.red};
    }
  }

  & .pokes {
    width: 90%;
    height: 85%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;

    > div {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 5px 3px 3px;
      border: 1px solid ${Theme.blue};
      border-radius: 5px;
      padding: 5px;
      transition: all 0.7s;
      :hover {
        background-color: ${Theme.darkBlue};
      }

      > img {
        width: 70% !important;
        cursor: pointer;
      }
    }
  }
`;
