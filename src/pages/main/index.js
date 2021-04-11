/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch, FaTimes, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Item, Header, ContentHeader } from './styles';
import apiMarvel from '../../services/apiMarvel';
import Loadin from '../../components/loadin/index';

function Main() {
    const [loadin, setLoadin] = useState(false);
    const [characters, setCharacters] = useState([]);
    const keyPrivate = 'efce5dc2a5917c0b296bdf709826fb8f';
    useEffect(() => {
        // Função que carrega os dados dos characters
        async function character() {
            const response = await apiMarvel
                .get(`/characters?apikey=${keyPrivate}`)
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            if (response === undefined) {
                setLoadin(false);
            } else {
                setLoadin(true);
                setCharacters(response.data.data.results);
            }
        }
        character();
    }, []);

    async function character() {
        const response = await apiMarvel
            .get(`/characters?apikey=${keyPrivate}`)
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(false);
            });
        if (response === undefined) {
            setLoadin(false);
        } else {
            setLoadin(true);
            setCharacters(response.data.data.results);
        }
    }
    // Função que busca os dados dos characters apartir de entrada do usuário
    async function formSubmit(data) {
        const response = await apiMarvel
            .get(
                `/characters?nameStartsWith=${data.input}&apikey=${keyPrivate}`
            )
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(false);
            });
        if (response === undefined) {
            setLoadin(false);
        } else {
            setLoadin(true);
            setCharacters(response.data.data.results);
        }
    }
    if (!loadin) {
        return <Loadin />;
    }

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <h1>CHARACTERS</h1>
                </ContentHeader>
            </Header>
            <Header>
                <ContentHeader>
                    <Form onSubmit={formSubmit}>
                        <Input
                            name="input"
                            type="text"
                            placeholder="Seach..."
                        />
                        <button type="submit">
                            <FaSearch />
                        </button>
                    </Form>
                    <button type="button" onClick={() => character()}>
                        <FaTimes />
                    </button>
                    <div>
                        <Link to="/main/favorites">
                            <button type="button">
                                {' '}
                                <FaRegHeart />
                                Favorites
                            </button>
                        </Link>
                    </div>
                </ContentHeader>
            </Header>
            <ul>
                {characters.map((character) => (
                    <Item key={character.id}>
                        <Link to={`/details/${character.id}`}>
                            <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt="marvel"
                            />
                            <strong>{character.name}</strong>
                            <span>{character.description}</span>
                        </Link>
                    </Item>
                ))}
            </ul>
            <div>
                <button type="button">More</button>
            </div>
        </Container>
    );
}

export default Main;
