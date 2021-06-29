import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    ol, ul, li {
    list-style: none;
    }
    *{
        box-sizing:boerder-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
    }
`;
export default globalStyles;
