const initialState = {
    feeds: [],
    loading: false,
    error: null,
};
  
const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FEEDS_LOADING':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FEEDS_SUCCESS':
            return {
                ...state,
                feeds: action.payload,
                loading: false,
                error: null,
            };
        case 'FEEDS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
  
export default feedReducer;
  