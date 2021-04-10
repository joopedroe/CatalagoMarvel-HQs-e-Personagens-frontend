/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch } from 'react-icons/fa';
import { Container, Item, Header, ContentHeader } from './styles';
import apiMarvel from '../../services/apiMarvel';

function Main() {
    const [loadin, setLoadin] = useState(true);
    const [characters, setCharacters] = useState([]);
    const keyPrivate = 'efce5dc2a5917c0b296bdf709826fb8f';
    useEffect(() => {
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
                console.log(loadin);
                setCharacters(response.data.data.results);
            }
        }
        character();
    }, []);

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
            console.log(loadin);
            console.log(response.data.data.results);
            setCharacters(response.data.data.results);
        }
    }

    return (
        <Container>
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
                </ContentHeader>
            </Header>
            <ul>
                {characters.map((character) => (
                    <Item key={character.id}>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt="marvel"
                        />
                        <strong>{character.name}</strong>
                        <span>{character.description}</span>
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
