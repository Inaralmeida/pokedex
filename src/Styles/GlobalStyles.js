import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;
    }
    button, input{
        outline: none;
    }

    button{
        cursor: pointer;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        width: 5px;
        background-color: ${Theme.darkBlue};
    }
    ::-webkit-scrollbar-track{
        width: 5px;
        background-color: ${Theme.blue};
    }
   

`