import React, { useState } from 'react';
import { Container, Item } from './styles';
import logo from '../../assets/logo-marvel.png';
import apiMarvel from '../../services/apiMarvel';

function Main() {
    return (
        <Container>
            <header>
                <button type="button">Comincs</button>
                <button onClick={character} type="button">
                    Character
                </button>
            </header>
            <ul>
                <Item>
                    <img src={logo} alt="marvel" />
                    <strong>titulo</strong>
                    <span>descrição</span>
                </Item>
                <Item>
                    <img src={logo} alt="marvel" />
                    <strong>titulo</strong>
                    <span>descrição</span>
                </Item>
                <Item>
                    <img src={logo} alt="marvel" />
                    <strong>titulo</strong>
                    <span>descrição</span>
                </Item>
                <Item>
                    <img src={logo} alt="marvel" />
                    <strong>titulo</strong>
                    <span>descrição</span>
                </Item>
                <Item>
                    <img src={logo} alt="marvel" />
                    <strong>titulo</strong>
                    <span>descrição</span>
                </Item>
                <Item>
                    <img src={logo} alt="marvel" />
                    <strong>titulo</strong>
                    <span>descrição</span>
                </Item>
            </ul>
            <div>
                <button type="button">More</button>
            </div>
        </Container>
    );
}

export default Main;
