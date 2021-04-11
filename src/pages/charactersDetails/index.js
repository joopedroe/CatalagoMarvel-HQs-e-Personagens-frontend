/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiMarvel from '../../services/apiMarvel';
import { Container, Item, Header, ContentHeader, Button } from './styles';
import api from '../../services/api';
import Loadin from '../../components/loadin/index';

// import { Container } from './styles';

function characterDetails(props) {
    const [loadin, setLoadin] = useState(false);
    const [character, setCharacters] = useState([]);
    const [comics, setComics] = useState([]);
    const [path, setPath] = useState('');
    const keyPrivate = 'efce5dc2a5917c0b296bdf709826fb8f';
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Função que carrega os dados da pagina de detalhes do character
        async function characterDetail() {
            const response = await apiMarvel
                .get(
                    `/characters/${props.match.params.id}?apikey=${keyPrivate}`
                )
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            const responseComics = await apiMarvel
                .get(
                    `/characters/${props.match.params.id}/comics?apikey=${keyPrivate}`
                )
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            if (response === undefined) {
                setLoadin(false);
            } else {
                setLoadin(true);
                setPath(response.data.data.results[0].thumbnail.path);
                setComics(responseComics.data.data.results);
                setCharacters(response.data.data.results[0]);
            }
        }
        characterDetail();
    }, []);
    // Função responsavel por favoritar um character
    async function favorites() {
        // eslint-disable-next-line camelcase
        const id_user = localStorage.getItem('user_id');
        const { id } = character;
        const { name } = character;
        const { description } = character;
        // eslint-disable-next-line no-shadow
        const { path } = character.thumbnail;
        const data = {
            id,
            name,
            description,
            imageURL: path,
            type_image: 'jpg',
            id_user,
        };
        // chamada api que adiciona um character aos favoritos
        const response = await api
            .post('/character/adicionar', data, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                setLoadin(true);
            });
        if (response.status !== 200) {
            toast.warn('Character not add!');
        } else {
            toast.success('Successful character addition!');
        }
    }
    if (!loadin) {
        return <Loadin />;
    }

    return (
        <Container>
            <Header>
                <h1>CHARACTER DETAILS</h1>
            </Header>
            <ContentHeader>
                <img src={`${path}.jpg`} alt="marvelComics" />
                <div>
                    <h1>{character.name}</h1>
                    <h4>Details: {character.description}</h4>
                </div>
                <Button>
                    <button type="button" onClick={() => favorites()}>
                        <FaRegBookmark />
                    </button>
                </Button>
            </ContentHeader>

            <ul>
                {comics.map((comic) => (
                    <Item key={comic.id}>
                        <Link to={`/comics/details/${comic.id}`}>
                            <img
                                src={`${comic.thumbnail.path}.jpg`}
                                alt="marvelComics"
                            />
                            <strong>{comic.title}</strong>
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

export default characterDetails;
