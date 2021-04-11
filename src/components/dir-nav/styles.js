import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(-90deg, #222222, #111);
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 100px;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    text {
        color: #fff;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
