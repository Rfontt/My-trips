import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
     --highlight: #e20e8d;
     --background: #030518;
     --white: #eeeeee;

     --container: 100rem;

     --small: 1.5rem;
     --medium: 3rem;
     --large: 5rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html: {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: -app-system, Roboto, sans-serif;
        background-color: var(--background);
        color: var(--white);
    }

    p, a {
        font-size: 2rem;
        line-height: var(--medium);
    }

    a {
        color: var(--highlight);
    }
`

export default GlobalStyles