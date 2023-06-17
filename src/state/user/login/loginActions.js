import apiHandler from '../../../api/apiHandler';

export const loginStart = () => {
	return {
		type: 'LOGIN_START',
	};
};

export const loginSuccess = (userData) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: userData,
	};
};

export const loginFailure = (errors) => {
	return {
		type: 'LOGIN_FAILURE',
		payload: errors,
	};
};


export const login = (userData) => {
	return (dispatch) => {
		dispatch(loginStart());

		apiHandler
		.post('/login', userData)
		.then((response) => {
			const userData = response.data;
			dispatch(loginSuccess(userData));
		})
		.catch((error) => {
			if (error?.response?.data?.errors) {
				const errors = error.response.data.errors;
				dispatch(loginFailure(errors));
			} else {
				dispatch(loginFailure({error: error.response.data.message}));
			}
		});
	};
};

export const logoutStart = () => {
	return {
		type: 'LOGOUT_START',
	};
};

export const logoutSuccess = () => {
	return {
		type: 'LOGOUT_SUCCESS',
	};
};

export const logoutFailure = (errors) => {
	return {
		type: 'LOGOUT_FAILURE',
		payload: errors,
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch(logoutStart());
		apiHandler
		.post('/logout',{},{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('access_token')}`
			}
		})
		.then((response) => {
			dispatch(logoutSuccess());
		})
		.catch((error) => {
			dispatch(logoutFailure(['An error occurred. Please try again.']));
		});
	};
};