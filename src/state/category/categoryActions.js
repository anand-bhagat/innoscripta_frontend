import apiHandler from "../../api/apiHandler";

export const categoriesStart = () => {
	return {
		type: 'CATEGORIES_LOADING',
	};
};

export const categoriesSuccess = (categories) => {
	return {
		type: 'CATEGORIES_SUCCESS',
		payload: categories
	};
};

export const categoriesFailure = (errors) => {
	return {
		type: 'CATEGORIES_FAILURE',
		payload: errors,
	};
};


export const getCategories = () => {
	return (dispatch) => {
		dispatch(categoriesStart());
	
		apiHandler
		.get('/news/categories')
		.then((response) => {
			const categories = response.data.data;
			dispatch(categoriesSuccess(categories));
		})
		.catch((error) => {
			if (error?.response?.data?.errors) {
				const errors = error.response.data.errors;
				dispatch(categoriesFailure(errors));
			} else {
				dispatch(categoriesFailure(['An error occurred. Please try again.']));
			}
		});
	};
};
  