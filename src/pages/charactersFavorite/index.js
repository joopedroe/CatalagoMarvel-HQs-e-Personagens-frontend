/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Header, Item, ContentHeader, HeaderItem } from './styles';
import api from '../../services/api';
import Loadin from '../../components/loadin/index';

function favoritesCharacters() {
    const [loadin, setLoadin] = useState(false);
    const [characters, setCharacters] = useState([]);
    const iduser = localStorage.getItem('user_id');
    useEffect(() => {
        // Função responsavel por lista characters favoritos
        async function listFavorites() {
            const response = await api
                .get(`/character/favoritos/${iduser}`)
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            if (response === undefined) {
                setLoadin(false);
            } else {
                setCharacters(response.data);
                setLoadin(true);
            }
        }
        listFavorites();
    }, []);
    async function remove(id) {
        const response = await api
            .delete(`/character/remove/${id}`)
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(false);
            });
        if (response === undefined) {
            setLoadin(false);
        } else {
            const responseCharcter = await api
                .get(`/character/favoritos/${iduser}`)
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            setCharacters(responseCharcter.data);
        }
    }
    if (!loadin) {
        return <Loadin />;
    }

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <h1>FAVORITES CHARACTERS</h1>
                </ContentHeader>
            </Header>
            <ul>
                {characters.map((character) => (
                    <Item key={character.id}>
                        <HeaderItem>
                            <Link to={`/details/${character.id}`}>
                                <img
                                    src={`${character.imageURL}.${character.type_image}`}
                                    alt="marvel"
                                />
                                <strong>{character.name}</strong>
                                <span>{character.description}</span>
                            </Link>
                        </HeaderItem>
                        <div>
                            <button
                                type="button"
                                onClick={() => remove(character._id)}
                            >
                                <FaTrashAlt /> Remove
                            </button>
                        </div>
                    </Item>
                ))}
            </ul>
            <div />
        </Container>
    );
}

export default favoritesCharacters;
