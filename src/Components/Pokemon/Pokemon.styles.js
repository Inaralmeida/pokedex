import styled from "styled-components";
import { Theme } from "../../Styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .loading {
    width: 10%;
    animation: load 1s infinite alternate ease-in;
    --webikit-filter: drop-shadow(3px 3px 5px #555);
    filter: drop-shadow(3px 3px 5px #555);
  }

  @keyframes load {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(150px);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > h2 {
    font-size: 36px;
    text-transform: uppercase;
    color: ${(p) => p.color.color};
    letter-spacing: 1px;
  }

  & .static {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: top;
    justify-content: space-around;

    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      > span {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }

  & .infos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > img {
      width: 40% !important;
      --webikit-filter: drop-shadow(5px 5px 8px #555);
      filter: drop-shadow(5px 5px 8px #555);
    }
  }

  & .progressBar {
    width: 250px;
    border-radius: 15px;
    color: white;
    text-align: end;
    background-color: ${Theme.gray};

    > span {
      padding-right: 5px;
      display: block;
      width: 0%;
      height: 100%;
      background-color: ${(p) => p.color.color};
      transition: all 2s;
      border-radius: 15px;
    }
  }

  @keyframes hp {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[0].value > 100 ? 100 : p.status[0].value)}%;
    }
  }
  @keyframes attack {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[1].value > 100 ? 100 : p.status[1].value)}%;
    }
  }
  @keyframes defense {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[2].value >= 100 ? 100 : p.status[2].value)}%;
    }
  }
  @keyframes special-attack {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[3].value >= 100 ? 100 : p.status[3].value)}%;
    }
  }
  @keyframes special-defense {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[4].value > 100 ? 100 : p.status[4].value)}%;
    }
  }
  @keyframes speed {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[5].value >= 100 ? 100 : p.status[5].value)}%;
    }
  }
`;
