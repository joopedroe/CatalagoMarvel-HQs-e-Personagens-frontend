import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Header, Item, ContentHeader } from './styles';
import api from '../../services/api';

function favoritesCharacters() {
    const [loadin, setLoadin] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Função responsavel por lista characters favoritos
        async function listFavorites() {
            const iduser = localStorage.getItem('user_id');
            const response = await api
                .get(`/character/favoritos/${iduser}`)
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            if (response === undefined) {
                setLoadin(false);
            } else {
                console.log(loadin);
                console.log(characters);
                setCharacters(response.data);
                console.log(response);
            }
        }
        listFavorites();
    }, []);

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <h1>Favorites Characters</h1>
                </ContentHeader>
            </Header>
            <ul>
                {characters.map((character) => (
                    <Item key={character.id}>
                        <Link to={`/details/${character.id}`}>
                            <img
                                src={`${character.imageURL}.${character.type_image}`}
                                alt="marvel"
                            />
                            <strong>{character.name}</strong>
                            <span>{character.description}</span>
                        </Link>
                    </Item>
                ))}
            </ul>
            <div />
        </Container>
    );
}

export default favoritesCharacters;
