import React, { useEffect, useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiMarvel from '../../services/apiMarvel';
import {
    Container,
    Item,
    Header,
    ContentHeader,
    Button,
} from '../charactersDetails/styles';
import api from '../../services/api';
import Loadin from '../../components/loadin/index';

// import { Container } from './styles';

function comicDetails(props) {
    const [loadin, setLoadin] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [comic, setComics] = useState([]);
    const [path, setPath] = useState('');
    const keyPrivate = 'efce5dc2a5917c0b296bdf709826fb8f';
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Função que carrega os dados da pagina de detalhes do comic
        async function comicDetail() {
            // Chamada na api da marvel que retorna as comics
            const response = await apiMarvel
                .get(`/comics/${props.match.params.id}?apikey=${keyPrivate}`)
                // eslint-disable-next-line no-unused-vars
                .catch((error) => {
                    setLoadin(false);
                });
            // Chamada na api da marvel que retorna os charactter relacionados da comic
            const responseCharacter = await apiMarvel
                .get(
                    `/comics/${props.match.params.id}/characters?apikey=${keyPrivate}`
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
                setCharacters(responseCharacter.data.data.results);
                setComics(response.data.data.results[0]);
            }
        }
        comicDetail();
    }, []);
    // Função responsavel por favoritar uma comic
    async function favorites() {
        // eslint-disable-next-line camelcase
        const id_user = localStorage.getItem('user_id');
        const { id } = comic;
        const { title } = comic;
        const { description } = comic;
        // eslint-disable-next-line no-shadow
        const { path } = comic.thumbnail;
        const data = {
            id,
            title,
            description,
            imageURL: path,
            type_image: 'jpg',
            id_user,
        };
        // Endpoint que adiciona uma comic aos favoritos
        const response = await api
            .post('/comic/adicionar', data, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                setLoadin(true);
            });
        if (response.status !== 200) {
            toast.warn('Comic not add!');
        } else {
            toast.success('Successful comic addition!');
        }
    }
    if (!loadin) {
        return <Loadin />;
    }

    return (
        <Container>
            <Header>
                <h1>COMIC DETAILS</h1>
            </Header>
            <ContentHeader>
                <img src={`${path}.jpg`} alt="marvelComics" />
                <div>
                    <h1>{comic.title}</h1>
                    <h4>Details: {comic.description}</h4>
                </div>
                <Button>
                    <button type="button" onClick={() => favorites()}>
                        <FaRegBookmark />Add Favorite
                    </button>
                </Button>
            </ContentHeader>
            <Header>
                <h1>RELATED CHARACTERS</h1>
            </Header>
            <ul>
                {characters.map((character) => (
                    <Item key={character.id}>
                        <Link to={`/details/${character.id}`}>
                            <img
                                src={`${character.thumbnail.path}.jpg`}
                                alt="marvelComics"
                            />
                            <strong>{character.name}</strong>
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

export default comicDetails;
