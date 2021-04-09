/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { logged } from '../services/logged';
import authLayout from '../pages/layout/auth';
import defaultLayout from '../pages/layout/default';

export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = logged();

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }
    if (signed && !isPrivate) {
        return <Redirect to="/main" />;
    }

    const Layout = !signed ? authLayout : defaultLayout;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouterWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouterWrapper.defaultProps = {
    isPrivate: false,
};
