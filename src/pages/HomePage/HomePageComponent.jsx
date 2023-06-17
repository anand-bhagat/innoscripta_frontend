import React from 'react';
import withAuth from '../../hoc/withAuth';
import ArticleList from '../../components/ArticleList/ArticleList';
import SearchFilterForm from '../../components/SearchFilterForm/SearchFilterForm';

const HomePageComponent = () => {
	return (
		<div>
			<SearchFilterForm />
			<ArticleList />
		</div>
	);
};

export default HomePageComponent;
