import React from 'react';

const ImageCard = ({ image }) => {
  /** split image Array */
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Photo By: {image.user}
        </div>
        <ul>
          <li>
            <strong className='text-blue-500'>Views:  </strong>
            {image.views} {/** Put value (views,download,comment...) in the DOM */}
          </li>
          <li>
            <strong className='text-blue-500'>Downloads:  </strong>
            {image.downloads}
          </li>
          <li>
            <strong className='text-blue-500'>Comments: </strong>
            {image.comments}
          </li>
          <li>
            <strong className='text-blue-500'>Likes:  </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        { tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))
        }
      </div>
    </div>
  )
}

export default ImageCard;
