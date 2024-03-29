import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    height: 100%;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
        }
        span {
            color: red;
            align-self: flex-start;
            margin: 0 0 10px;
            font: sans-serif;
        }
        button {
            margin: 5px 0 0;
            height: 44px;
            background: #0059b3;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.05, '#0059b3')};
            }
        }
        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }

    button {
        width: 100%;
        margin: 5px 0 0;
        height: 44px;
        background: #b30000;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
            background: ${darken(0.05, '#990000')};
        }
    }
`;
