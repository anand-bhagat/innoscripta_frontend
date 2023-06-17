import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate  } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const isLoggedIn = useSelector((state) => state?.user?.loggedIn);

        if (!isLoggedIn) {
            return <Navigate  to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };

    return WithAuth;
};

export default withAuth;
