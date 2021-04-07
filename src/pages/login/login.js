import React from 'react';
import { Link } from 'react-router-dom';

function login() {
    return (
        <>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Access</button>
                <Link to="/register">Create account</Link>
            </form>
        </>
    );
}

export default login;
