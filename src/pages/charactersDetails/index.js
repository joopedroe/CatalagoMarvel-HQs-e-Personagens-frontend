import React, { useEffect, useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import apiMarvel from '../../services/apiMarvel';
import { Container, Item, Header, ContentHeader, Button } from './styles';

// import { Container } from './styles';

function characterDetails(props) {
    const [loadin, setLoadin] = useState(true);
    const [character, setCharacters] = useState([]);
    const [comics, setComics] = useState([]);
    const [path, setPath] = useState('');
    console.log(props);
    const keyPrivate = 'efce5dc2a5917c0b296bdf709826fb8f';
    useEffect(() => {
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
                console.log(loadin);
                console.log(response);
                setPath(response.data.data.results[0].thumbnail.path);
                setComics(responseComics.data.data.results);
                setCharacters(response.data.data.results[0]);
            }
            console.log(response.data.data.results[0].thumbnail);
        }
        characterDetail();
    }, []);
    return (
        <Container>
            <Header>
                <h1>CHARACTER DETAILS</h1>
            </Header>
            <ContentHeader>
                <img src={`${path}.jpg`} alt="marvelComics" />
                <div>
                    <h1>{character.name}</h1>
                    <h5>Details: {character.description}</h5>
                </div>
                <Button>
                    <button type="button">
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
