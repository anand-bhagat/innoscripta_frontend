const token = localStorage.getItem('access_token');

const initialState = {
	user: null,
	loading: false,
	error: null,
	loggedIn: token ? true : false,
};
  
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_START':
			return {
				...state,
				loading: true, 
				error: null,
			};
		case 'LOGIN_SUCCESS':
			localStorage.setItem('access_token',action.payload.token);
			return {
				...state,
				loading: false,
				loggedIn: true,
				user: action.payload,
			};
		case 'LOGIN_FAILURE':
		case 'LOGOUT_FAILURE':
			return {
				...state,
				loading: false, 
				error: action.payload,
			};
		case 'LOGOUT_START':
			return {
				...state,
				loading: true, 
			};
		case 'LOGOUT_SUCCESS':
			localStorage.removeItem('access_token');
			return {
				...state,
				loading: false,
				loggedIn: false,
			};
		default:
			return state;
	}
};
  
export default loginReducer;
  