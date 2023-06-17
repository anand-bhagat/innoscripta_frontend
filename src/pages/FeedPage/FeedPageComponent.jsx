import React from 'react'
import { useState } from 'react';
import SourceCategory from '../../components/SourceCategory/SourceCategory';
import { getFeed, saveFeed } from '../../state/feed/feedActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { searchAndFilterArticles } from '../../state/article/articleActions';
import ArticleList from '../../components/ArticleList/ArticleList';

const FeedPage = () => {
	const [category, setCategory] = useState('all');
    const [source, setSource] = useState('all');

	const error = useSelector(state => state.feeds.error);
	const loading = useSelector(state => state.feeds.loading);
	const feed = useSelector(state => state.feeds.feeds);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveFeed({
           source, category
        }));
    };

	useEffect(() => {
		dispatch(getFeed());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	useEffect(() => {
		if(feed?.['source']){
			setSource(feed.source);
		}
		if(feed?.['category']){
			setCategory(feed.category);
		}
	},[feed]);

	useEffect(() => {
		dispatch(searchAndFilterArticles({
			source, category
		}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[source, category]);


	return (
		<div>
			<div className='flex justify-center p-6'>
				<div className='w-full md:w-3/5'>
					<form onSubmit={handleSubmit} className='w-full'>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
							<SourceCategory category={category} setCategory={setCategory} source={source} setSource={setSource} error={error} />
							<div className='pt-6 flex justify-center'>
								<button className='text-center rounded bg-indigo-600 px-16 py-[11px] text-sm font-semibold leading-6 text-white 
									shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
									focus-visible:outline-indigo-600' type="submit">
									Save Preference
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<ArticleList />
			<Loader loading={loading} />
		</div>
	)
}

export default FeedPage