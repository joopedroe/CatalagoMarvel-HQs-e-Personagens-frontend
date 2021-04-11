import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch, FaTimes, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Item, Header, ContentHeader } from '../main/styles';
import apiMarvel from '../../services/apiMarvel';
import Loadin from '../../components/loadin/index';

function comics() {
    const [loadin, setLoadin] = useState(false);
    // eslint-disable-next-line no-shadow
    const [comics, setComics] = useState([]);
    const keyPrivate = 'efce5dc2a5917c0b296bdf709826fb8f';
    useEffect(() => {
        // Função que carrega os dados das comics
        async function comic() {
            const response = await apiMarvel
                .get(`/comics?apikey=${keyPrivate}`)
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            if (response === undefined) {
                setLoadin(false);
            } else {
                setLoadin(true);
                console.log(response.data.data.results);
                setComics(response.data.data.results);
            }
        }
        comic();
    }, []);

    async function Comic() {
        const response = await apiMarvel
            .get(`/comics?apikey=${keyPrivate}`)
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(false);
            });
        if (response === undefined) {
            setLoadin(false);
        } else {
            setLoadin(true);
            setComics(response.data.data.results);
        }
    }
    // Função que busca os dados das comics apartir de entrada do usuário
    async function formSubmit(data) {
        const response = await apiMarvel
            .get(`/comics?titleStartsWith=${data.input}&apikey=${keyPrivate}`)
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(false);
            });
        if (response === undefined) {
            setLoadin(false);
        } else {
            setLoadin(true);
            setComics(response.data.data.results);
        }
    }
    if (!loadin) {
        return <Loadin />;
    }

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <h1>COMICS</h1>
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
                    <button type="button" onClick={() => Comic()}>
                        <FaTimes />
                    </button>
                    <div>
                        <Link to="/comics/favorites">
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
                {comics.map((comic) => (
                    <Item key={comic.id}>
                        <Link to={`/details/${comic.id}`}>
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt="marvel"
                            />
                            <strong>{comic.title}</strong>
                            <span>{comic.description}</span>
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

export default comics;
