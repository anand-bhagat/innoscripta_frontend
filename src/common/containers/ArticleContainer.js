import React from 'react';
import { useSelector } from 'react-redux';
import ArticleComponent from '../components/ArticleComponent';

const ArticleContainer = () => {
	const articles = useSelector((state) => state.article.articles);

	return (
		<div>
			{articles.map((article) => (
				<ArticleComponent key={article.id} article={article} />
			))}
		</div>
	);
};

export default ArticleContainer;
