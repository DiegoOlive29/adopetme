import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        
    :root{
        --orange: #F2AE2F;
        --green: #83B200;
        --red: #F22222;
        --petroleumBlue: #4DB1B3;
        --white: #F2F2F2;
        --black: #000000;
    }  

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Comfortaa';
    }

    button {
        cursor: pointer;
        &:hover {
        }
    }

    li,ul {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    h1, h2 {
        font-weight: bold;
        font-family: 'Fredoka', sans-serif;;
    }
`;

export default GlobalStyle;
