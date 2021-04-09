import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

// Função responsável por alterar dados de um usuario
function profileUpdate({ history }) {
    async function formSubmit(data) {
        // eslint-disable-next-line no-unused-vars
        const response = await api
            .post('/novo/usuario', {
                name: data.name,
                username: data.username,
                password: data.password,
                password2: data.password,
                email: data.email,
                isAdmin: false,
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('teste');
                toast.warn('Invalid profileUpdate!');
            });
        // eslint-disable-next-line no-console
        console.log(response);
        if (!response.data.success) {
            toast.warn(response.data.message);
        } else {
            toast.success(response.data.massage);
            history.push('/');
        }
    }
    // schema responsavel pelas validações do formulário
    const schema = Yup.object().shape({
        name: Yup.string().required('Required field'),
        username: Yup.string().required('Required field'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required field'),
        password: Yup.string().required('Required field'),
        confirmPassword: Yup.string().required('Required field'),
    });
    return (
        <>
            <Container>
                <Form schema={schema} onSubmit={formSubmit}>
                    <Input name="name" type="text" placeholder="Name" />
                    <Input name="username" type="text" placeholder="Username" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder=" Confirm Password"
                    />
                    <button type="submit">Update</button>
                </Form>
                <Link to="/main">
                    <button type="button">Back</button>
                </Link>
            </Container>
        </>
    );
}

export default profileUpdate;
