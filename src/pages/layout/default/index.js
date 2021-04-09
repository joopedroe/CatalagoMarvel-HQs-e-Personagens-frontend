import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Navbar from '../../../components/nav-bar/index';

function defaultLayout({ children }) {
    return (
        <Wrapper>
            <Navbar />
            {children}
        </Wrapper>
    );
}
defaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default defaultLayout;
