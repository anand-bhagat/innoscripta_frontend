import React, { useState } from 'react'
import ImageNotAvailable from '../../assets/images/ImageNotAvailable.png';

const ImageLoader = ({ src, alt, className}) => {
	const [loading, setLoading] = useState(true);
	return (
		<div className={`relative ${className}`}>
			{
				loading &&  
				<div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
					<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
				</div>
			}
			{
				src && <img src={src} alt={alt} onLoad={(e) => {setLoading(false)}} className='rounded-lg'/>
			}
			{
				!src &&  <img src={ImageNotAvailable} alt={alt} onLoad={(e) => {setLoading(false)}}/>
			}
		</div>
	)
}

export default ImageLoader