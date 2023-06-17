import apiHandler from "../../api/apiHandler";

export const articlesStart = () => {
	return {
		type: 'ARTICLES_LOADING',
	};
};

export const articlesSuccess = (articles) => {
	return {
		type: 'ARTICLES_SUCCESS',
		payload: articles
	};
};

export const articlesFailure = (errors) => {
	return {
		type: 'ARTICLES_FAILURE',
		payload: errors,
	};
};


export const searchAndFilterArticles = (payload) => {
	return (dispatch) => {
		if(payload.source === 'all'){
			payload.source = ''
		}
		if(payload.category === 'all'){
			payload.category = ''
		}
		dispatch(articlesStart());
	
		apiHandler
		.post('/news',  payload)
		.then((response) => {
			const articles = response.data.data;
			dispatch(articlesSuccess(articles));
		})
		.catch((error) => {
			if (error?.response?.data?.errors) {
				const errors = error.response.data.errors;
				dispatch(articlesFailure(errors));
			} else {
				dispatch(articlesFailure(['An error occurred. Please try again.']));
			}
		});
	};
};
  