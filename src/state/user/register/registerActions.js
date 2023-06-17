import apiHandler from "../../../api/apiHandler";

export const registrationStart = () => {
    return {
        type: 'REGISTRATION_START',
    };
};

export const registrationSuccess = (userData) => {
    return {
        type: 'REGISTRATION_SUCCESS',
        payload: userData,
    };
};

export const registrationFailure = (errors) => {
    return {
        type: 'REGISTRATION_FAILURE',
        payload: errors,
    };
};

export const register = (payload) => {
    return (dispatch) => {
        dispatch(registrationStart());

        apiHandler
        .post('/register', payload)
        .then((response) => {
            const userData = response.data;
            dispatch(registrationSuccess(userData));
        })
        .catch((error) => {
            if (error?.response?.data?.errors) {
                const errors = error.response.data.errors;
                dispatch(registrationFailure(errors));
            } else {
                dispatch(registrationFailure(['An error occurred. Please try again.']));
            }
        });
    };
};

