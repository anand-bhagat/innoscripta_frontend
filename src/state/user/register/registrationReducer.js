const initialState = {
    user: null,
    loading: false,
    error: null,
};
  
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTRATION_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'REGISTRATION_SUCCESS':
            localStorage.setItem('access_token',action.payload.access_token);
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case 'REGISTRATION_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
  
  export default registrationReducer;
  