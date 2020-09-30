import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: rgb(119,136,153, 0.4);
        -webikit-font-smoothing: antialised !important;
    }

    body, input, button, a {
        color: #333;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;