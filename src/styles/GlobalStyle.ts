import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
const globalStyles = createGlobalStyle`
    ${reset};
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    ol, ul, li {
    list-style: none;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        box-sizing: border-box;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 400;
        /* overflow: hidden; */
        white-space: nowrap;
        margin: auto auto;
        width: 980px;
        color: #424242;
        @media only screen and (max-width: 1100px) {
        width: 80%;
        }
        @media only screen and (max-width: 990px) {
        width: 100%;
        margin: 0;
        }
    }
`
export default globalStyles
