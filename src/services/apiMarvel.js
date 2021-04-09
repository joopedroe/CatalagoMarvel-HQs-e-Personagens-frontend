import axios from 'axios';

const apiMarvel = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

export default apiMarvel;
