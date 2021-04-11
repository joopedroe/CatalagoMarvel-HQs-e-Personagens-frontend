import axios from 'axios';

const api = axios.create({
    baseURL: 'https://frontend-marvel.herokuapp.com/',
});

export default api;
