import React, {useState,useEffect} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

// Função responsável por alterar dados de um usuario
function profileUpdate({ history }) {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('user_id');
    const [user, setUser] = useState([]);

    useEffect(() => {
        // Função que carrega os dados dos characters
        async function getPerfil(){
            const response = await api
                .get(
                    `/get/usuario/${id}`,{
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${token}`,
                        },
                    })
            setUser(response.data)
        }
        getPerfil();
    }, []);
    async function formSubmit(data) {
        // eslint-disable-next-line no-unused-vars
        const response = await api
            .put(
                '/atualizar/usuario',
                {
                    id,
                    name: data.name,
                    username: data.username,
                    password: data.newpassword,
                    email: data.email,
                    isAdmin: false,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                }
            )
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // eslint-disable-next-line no-console
                toast.warn('Invalid profileUpdate!');
            });
        // eslint-disable-next-line no-console
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
        newpassword: Yup.string().required('Required field'),
        confirmPassword: Yup.string().required('Required field'),
    });
    return (
        <div>
            <Container>
                <Form initialData={user} schema={schema} onSubmit={formSubmit}>
                    <Input name="name" type="text" placeholder="Name" />
                    <Input name="username" type="text" placeholder="Username" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input
                        name="newpassword"
                        type="password"
                        placeholder="New Password"
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
        </div>
    );
}

export default profileUpdate;
