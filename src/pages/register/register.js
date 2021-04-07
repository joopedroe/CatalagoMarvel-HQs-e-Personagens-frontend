import React from 'react';

function register() {
    return (
        <>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Create</button>
            </form>
        </>
    );
}

export default register;
