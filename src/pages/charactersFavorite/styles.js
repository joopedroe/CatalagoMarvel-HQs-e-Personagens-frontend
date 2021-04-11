import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 80%;
    color: #7159c1;
    display: flex;
    margin: 0px auto;
    flex-direction: column;

    header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
            margin-left: 30px;
            height: 44px;
            width: 150px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.05, '#ecec13')};
            }
        }
    }
    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
        img {
            width: 165px;
            height: 200px;
        }
    }
    > div {
        display: flex;
        align-self: center;
        align-items: center;
        padding: 15px;
        button {
            border: 0;
            background: none;
        }
    }
`;
export const Item = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    height: 350px;
    strong {
        display: block;
        color: #333;
        font-size: 15px;
        font-weight: bold;
    }

    span {
        display: block;
        color: #333;
        margin-top: 3px;
        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 2; // Quantidade de linhas
        -webkit-box-orient: vertical;
    }
`;

export const Header = styled.div`
    padding: 0 5px;
`;

export const ContentHeader = styled.div`
    height: auto;
    max-width: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    form {
        display: flex;
        max-width: 400px;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            width: 300px;
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
            margin: 0 5px 0;
            height: 44px;
            width: 50px;
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
    }
`;
