import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #ffff;
        --background-color-secondary: #fffff;
        --font-color-primary: #FFFFFF;
        --font-family: "Space Grotesk";
        --system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        font-family: var(--system-ui);
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        background-color: var(--background-color);
    }

    html, body {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth !important;
    }
    .modalOpenBody {
       overflow: hidden;
    }

    .openModal {
        display: contents;
    }

`;
