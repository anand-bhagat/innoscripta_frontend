import apiHandler from "../../api/apiHandler";

export const feedsStart = () => {
	return {
		type: 'FEEDS_LOADING',
	};
};

export const feedsSuccess = (feeds) => {
	return {
		type: 'FEEDS_SUCCESS',
		payload: feeds
	};
};

export const feedsFailure = (errors) => {
	return {
		type: 'FEEDS_FAILURE',
		payload: errors,
	};
};

const headers = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem('access_token')}`
	}
}


export const getFeed = () => {
	return (dispatch) => {
		dispatch(feedsStart());
		
		apiHandler
		.get('/feed', headers)
		.then((response) => {
			const feeds = response.data.data;
			dispatch(feedsSuccess(feeds));
		})
		.catch((error) => {
			if (error?.response?.data?.errors) {
				const errors = error.response.data.errors;
				dispatch(feedsFailure(errors));
			} else {
				dispatch(feedsFailure(['An error occurred. Please try again.']));
			}
		});
	};
};

export const saveFeed = (payload) => {
	return (dispatch) => {
		dispatch(feedsStart());
	
		apiHandler
		.post('/feed', payload, headers)
		.then((response) => {
			const feeds = response.data.data;
			dispatch(feedsSuccess(feeds));
		})
		.catch((error) => {
			if (error?.response?.data?.errors) {
				const errors = error.response.data.errors;
				dispatch(feedsFailure(errors));
			} else {
				dispatch(feedsFailure(['An error occurred. Please try again.']));
			}
		});
	};
};
  