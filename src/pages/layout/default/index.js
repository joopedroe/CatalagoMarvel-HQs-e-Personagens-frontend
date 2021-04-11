import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Navbar from '../../../components/nav-bar/index';
import Dirbar from '../../../components/dir-nav/index';

function defaultLayout({ children }) {
    return (
        <Wrapper>
            <Navbar />
            {children}
            <Dirbar />
        </Wrapper>
    );
}
defaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default defaultLayout;
