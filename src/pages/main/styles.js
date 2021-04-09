import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 90%;
    color: #7159c1;
    display: flex;
    margin: 50px auto;
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
    }
    div {
        display: flex;
        align-self: center;
        align-items: center;
        padding: 30px;
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

    strong {
        display: block;
        color: #333;
        font-size: 15px;
        font-weight: normal;
    }

    span {
        display: block;
        color: #333;
        margin-top: 3px;
    }
`;
