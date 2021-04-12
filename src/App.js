import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Routes from './routes/routes';

function App() {
    return (
        <>
            <Routes />
            <GlobalStyle />
            <ToastContainer />
        </>
    );
}

export default App;
