import React from 'react';

function PostComments({ comments }) {
  return (
    <div className="w-full lg:w-2/3 h-full">
      {comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment.id} className="mb-4 px-4 py-4 w-full flex rounded-md bg-white dark:bg-gray-700">
            <div className='w-12 h-12 lg:w-16 lg:h-16 rounded-full'>
              <img className='w-full h-full' alt={comment.name} src={`https://ui-avatars.com/api/?rounded=true&background=random&name=${comment.name.split(' '[0])}+${comment.name.split(' '[1])}}`} />
            </div>
            <div className='ml-4 w-full flex flex-col'>
              <h4 className='text-lg md:text-xl font-medium capitalize dark:text-gray-50'>{comment.name}</h4>
              <span className='text-xs md:text-sm text-gray-400 dark:text-gray-300 lowercase'>{comment.email}</span>
              <p className='mt-4 text-sm md:text-md font-medium dark:text-gray-100'>{comment.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PostComments;