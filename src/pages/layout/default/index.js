import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Navbar from '../../../components/nav-bar/index';
import Header from '../../../components/select/header/index';

function defaultLayout({ children }) {
    return (
        <Wrapper>
            <Navbar />
            <Header />
            {children}
        </Wrapper>
    );
}
defaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default defaultLayout;
