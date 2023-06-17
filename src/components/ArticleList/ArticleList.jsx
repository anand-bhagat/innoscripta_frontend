import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import Article from '../Article/Article';

const ArticleList = ({ articles, loading}) => {
    return (
        <div>
            <Loader loading={loading} />
            <div className='flex justify-center px-6 md:px-0'>
                <div className='w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-3'>
                    {articles.map((article) => (
                        <Article article={article} key={article.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    articles: state.articles.articles,
    loading: state.articles.loading,
});

export default connect(mapStateToProps)(ArticleList);
