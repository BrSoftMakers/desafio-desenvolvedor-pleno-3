import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #3c5999;
        --tertiary-color: #363636;
        --quartary-color: #808cba;
        --quintary-color: #ffe897;
        --white-color: #f2f2f2;
    }
    * {
        margin: 0;
        padding: 0;

        h1, input {
            font-family: 'Ubuntu', sans-serif;
        }
    }
`;

export { GlobalStyle }