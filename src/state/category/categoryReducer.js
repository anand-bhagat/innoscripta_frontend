const initialState = {
    categories: [],
    loading: false,
    error: null,
};
  
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORIES_LOADING':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
                loading: false,
                error: null,
            };
        case 'CATEGORIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
  
export default categoryReducer;
  