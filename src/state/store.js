import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './user/login/loginReducer';
import registrationReducer from './user/register/registrationReducer';
import articleReducer from './article/articleReducer';
import categoryReducer from './category/categoryReducer';
import feedReducer from './feed/feedReducer';

const rootReducer = combineReducers({
    user: loginReducer,
    registration: registrationReducer,
    articles: articleReducer,
    categories: categoryReducer,
    feeds: feedReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
