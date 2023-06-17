import React from 'react'
import ImageLoader from '../ImageLoader/ImageLoader'
import moment from 'moment/moment'

const Article = ({article}) => {
	return (
		<article className='bg-gray-100 shadow-xl flex flex-col rounded-lg'>
			<ImageLoader src={article.image} alt={article.title} className="flex-none rounded-lg" />
			<div className='p-6 flex-1 flex flex-col'>
				<h1 className='text-xl pb-3'>
					<a href={article.url} target='_blank' rel="noreferrer">
						{article.title}
					</a>
				</h1>
				<p className='py-3'>{article.description}</p>
				<div className='mt-auto flex justify-between'>
					<p>{article.source}</p>
					<p>{moment(article.date).fromNow()}</p>
				</div>
			</div>
		</article>
	)
}

export default Article