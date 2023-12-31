import React from 'react';

const Loader = ({loading}) => {
    return (
		<>
			{
				loading &&  
				<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
					<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
				</div>
			}
		</>
    );
};

export default Loader;
