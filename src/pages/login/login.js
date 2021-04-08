import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

function login() {
    function formSubmit(data) {
        // eslint-disable-next-line no-console
        console.log(data);
    }
    const schema = Yup.object().shape({
        username: Yup.string()
            .email('e-mail invalid')
            .required('Required field'),
        password: Yup.string().required('Required field'),
    });
    return (
        <>
            <Form schema={schema} onSubmit={formSubmit}>
                <Input name="username" type="text" placeholder="Username" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Access</button>
                <Link to="/register">Create account</Link>
            </Form>
        </>
    );
}

export default login;
