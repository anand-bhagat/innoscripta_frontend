import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../../state/category/categoryActions';
import Loader from '../Loader/Loader';

const SourceCategory = ({ source, setSource, category, setCategory, error }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

	const loading = useSelector(state => state.categories.loading);
	const categories = useSelector(state => state.categories.categories);

	return (
		<>
			<div>
				<label htmlFor="source">Source</label>
				<select
					id='source'
					data-te-select-init
					data-te-select-placeholder="Select Source" 
					data-te-select-size="lg"
					value={source}
					onChange={(e) => setSource(e.target.value)}
					className='w-full px-4 py-[11px] border outline-0 rounded capitalize'
				>
					<option value="all">All</option>
					{
						Object.keys(categories).map((source) => (
							<option value={source} key={source} className='capitalize'>{source.replaceAll("_"," ").toLowerCase()}</option>
						))
					}
				</select>
				<p className='text-sm text-red-500'>{ error?.['source']}</p>
			</div>
			<div>
				<label htmlFor="category">Category</label>
				<select 
					id='category' 
					data-te-select-init  
					data-te-select-placeholder="Select Category" 
					data-te-select-size="lg" 
					value={category} 
					onChange={(e) => {setCategory(e.target.value)}} 
					className='w-full px-4 py-[11px] border outline-0 rounded capitalize'
				>
					<option value="all" >All</option>
					{
						source && categories[source] && Object.keys(categories[source]).map((key) => (
							<option key={key} value={key} className='capitalize'>{categories[source][key]}</option>
						))
					}
				</select>
				<p className='text-sm text-red-500'>{ error?.['category']}</p>
			</div>
			<Loader loading={loading} />
		</>
	)
}

export default SourceCategory