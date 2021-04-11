/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    Container,
    Header,
    Item,
    ContentHeader,
    HeaderItem,
} from '../charactersFavorite/styles';
import api from '../../services/api';
import Loadin from '../../components/loadin/index';

function favoritesComics() {
    const [loadin, setLoadin] = useState(false);
    const [comics, setComics] = useState([]);
    const iduser = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    useEffect(() => {
        // Função responsavel por listar comics favoritos
        async function listFavorites() {
            const response = await api
                .get(`/comic/favoritos/${iduser}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                })
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            if (response === undefined) {
                setLoadin(false);
            } else {
                setComics(response.data);
                setLoadin(true);
            }
        }
        listFavorites();
    }, []);
    async function remove(id) {
        // Chamada na api que retita uma comic da lista de favoritos
        const response = await api
            .delete(`/comic/remove/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(false);
            });
        if (response === undefined) {
            setLoadin(false);
        } else {
            // Chamada na api que lista as comics favoritas de um usuario
            const responseCharcter = await api
                .get(`/comic/favoritos/${iduser}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                })
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            setComics(responseCharcter.data);
        }
    }
    if (!loadin) {
        return <Loadin />;
    }

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <h1>FAVORITES COMICS</h1>
                </ContentHeader>
            </Header>
            <ul>
                {comics.map((comic) => (
                    <Item key={comic.id}>
                        <HeaderItem>
                            <Link to={`/comic/details/${comic.id}`}>
                                <img
                                    src={`${comic.imageURL}.${comic.type_image}`}
                                    alt="marvel"
                                />
                                <strong>{comic.title}</strong>
                                <span>{comic.description}</span>
                            </Link>
                        </HeaderItem>
                        <div>
                            <button
                                type="button"
                                onClick={() => remove(comic._id)}
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

export default favoritesComics;
