/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

// Função responsavel pela autenticação do usuario
function login({ history }) {
    // eslint-disable-next-line no-shadow
    const [login, setLogin] = useState(false);
    async function formSubmit(data) {
        setLogin(true);
        // eslint-disable-next-line no-unused-vars
        const response = await api.post('/login', data).catch((error) => {
            setLogin(false);
        });
        if (response === undefined) {
            toast.error('Invalid username or password!');
        } else {
            const { token } = response.data;
            const { user } = response.data;
            localStorage.setItem('user_id', user._id);
            localStorage.setItem('token', token);
            history.push('/main');
        }
    }
    // schema responsavel pela validação nos campos
    const schema = Yup.object().shape({
        username: Yup.string().required('Required field'),
        password: Yup.string().required('Required field'),
    });
    return (
        <>
            <Form schema={schema} onSubmit={formSubmit}>
                <Input name="username" type="text" placeholder="Username" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">
                    {!login ? 'Login' : 'Loading ...'}
                </button>
                <Link to="/register">Create account</Link>
            </Form>
        </>
    );
}

export default login;
