import React from 'react';
import { Form, Input } from '@rocketseat/unform';

function register() {
    function formSubmit(data) {
        console.log(data);
    }
    return (
        <>
            <Form onSubmit={formSubmit}>
                <Input name="name" type="text" placeholder="Name" />
                <Input name="username" type="text" placeholder="Username" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Create</button>
            </Form>
        </>
    );
}

export default register;
