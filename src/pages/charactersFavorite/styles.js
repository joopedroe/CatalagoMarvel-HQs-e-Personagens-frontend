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
    display: flex;
    flex-direction: column;
    strong {
        display: block;
        color: #333;
        font-size: 15px;
        font-weight: bold;
    }
    > div {
        align-self: stretch;

        button {
            height: 35px;
            width: 60px;
            background: red;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 12px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.05, 'red')};
            }
        }
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
export const HeaderItem = styled.div`
    height: 410px;
`;

export const ContentHeader = styled.div`
    height: auto;
    max-width: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    H1 {
        color: #e6e6e6;
    }
`;
