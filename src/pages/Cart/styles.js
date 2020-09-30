import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: center;
    height: 100%;

    .cart {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;
        width: 400px;
        background: #fff;
        border-radius: 16px;

        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

    }

    .header {
        text-align: center;
        padding: 10px;

        p {
            font-weight: 900;
        }
    }

    .product {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 20px 0;

        img {
            width: 100px;
            height: 100px;
            border: 2px solid #ccc;

        }
    }

    .content {
        &::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #888; 
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
        margin: 20px;
        max-height: 400px;
        overflow-y: auto;

    }

    .infos {
        margin-left: 20px;

        p {
            font-weight: 600;
            font-size: 16px;
        }

        span {
            font-size: 14px;
            color: #666;
        }
    }

    

    .footer {
        display: flex;
        flex-direction: column;
        margin: auto 0 20px;

        button {
            padding: 12px;
            border: none;
            border-radius: 6px;
            background: rgb(60,122,255);
            color: #fff;
            font-weight: bold;
            margin: 20px;
        }

        button:hover {
            opacity: 0.8;
        }
    }

    .total {
        margin: 20px;
        padding: 5px 0;

        div {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
    }

    .discount {
        padding: 10px 20px;
        border-radius: 18px;
        background: #ccffcc;

        p {
            color: #009900;
            font-size: 16px;
        }
    }
`;
