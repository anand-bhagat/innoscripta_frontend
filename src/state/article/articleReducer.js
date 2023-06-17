const initialState = {
    articles: [],
    loading: false,
    error: null,
};
  
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ARTICLES_LOADING':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'ARTICLES_SUCCESS':
            return {
                ...state,
                articles: action.payload,
                loading: false,
                error: null,
            };
        case 'ARTICLES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
  
export default articleReducer;
  