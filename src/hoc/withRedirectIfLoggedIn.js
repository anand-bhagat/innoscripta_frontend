import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withRedirectIfLoggedIn = (WrappedComponent) => {
    const WithRedirectIfLoggedIn = (props) => {
            const isLoggedIn = useSelector((state) => state.user.loggedIn);

            if (isLoggedIn) {
                return <Navigate to="/" />;
            }

            return <WrappedComponent {...props} />;
    };

    return WithRedirectIfLoggedIn;
};

export default withRedirectIfLoggedIn;
