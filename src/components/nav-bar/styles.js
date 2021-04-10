import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: linear-gradient(-90deg, #222222, #111);
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        display: flex;
        align-items: center;

        img {
            height: 50px;
            width: 60px;
        }
    }
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    aside {
        button {
            margin: 5px 0 0;
            height: 44px;
            width: 150px;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 4px;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.05, '#b30000')};
            }
        }
    }
`;

export const Profiler = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    div {
        button {
            margin: 5px 0 0;
            height: 44px;
            width: 150px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
        }
        text-align: block;
        margin-right: 10px;
        strong {
            display: block;
            color: #999;
        }
        a {
            display: block;
            margin-top: 2px;
            font-size: 20px;
            color: #111;
            font-weight: bold;
        }
    }
`;
export const Div = styled.div`
    border-left: 1px solid #eee;
    padding-left: 15px;
    margin-left: 15px;
`;
