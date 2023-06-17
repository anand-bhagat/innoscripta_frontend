// SearchFilterForm.js

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchAndFilterArticles } from '../../state/article/articleActions';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './SearchFilterForm.css';
import SourceCategory from '../SourceCategory/SourceCategory';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const SearchFilterForm = ({ searchAndFilterArticles }) => {
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [category, setCategory] = useState('all');
    const [source, setSource] = useState('all');
   
    useEffect(() => {
        searchAndFilterArticles({
            search, startDate, source, category
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate, endDate, source, category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchAndFilterArticles({
            search, startDate, source, category
        });
    };

    return (
        <div className='flex justify-center p-6'>
            <div className='w-full md:w-3/5'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div>
                        <div className='flex'>
                            <div className='flex-1'>
                                <input
                                    id='search'
                                    type="text"
                                    placeholder="Search News"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className='w-full px-4 py-2 border outline-0 rounded'
                                />
                            </div>
                            <div className='w-14 flex justify-center items-center'>
                                <button type="submit" className=''>
                                    <MagnifyingGlassIcon className='w-8 h-8' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3">
                        <div>
                            <label htmlFor="start_date">Start Date</label>
                            <div>
                                <DatePicker onChange={setStartDate} value={startDate} className="w-full px-4 py-2 border outline-0 rounded" format="y-MM-dd" maxDate={new Date()}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="end_date">End Date</label>
                            <div>
                                <DatePicker onChange={setEndDate} value={endDate} className="w-full px-4 py-2 border outline-0 rounded" format="y-MM-dd" maxDate={new Date()}/>
                            </div>
                        </div>
                        <SourceCategory category={category} setCategory={setCategory} source={source} setSource={setSource} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { searchAndFilterArticles })(SearchFilterForm);
