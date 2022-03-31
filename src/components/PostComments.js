import React from 'react';

function PostComments({ comments }) {
  return (
    <div className="w-2/3 h-full">
      {comments.length > 0 &&
        comments.map((comment) => (
          <div className="px-4 py-4 w-full flex">
            <div className='w-16 h-16 rounded-full'>
              <img alt={comment.name} src={`https://ui-avatars.com/api/?rounded=true&background=random&name=${comment.name.split(' '[0])}+${comment.name.split(' '[1])}}`} />
            </div>
            <div className='ml-4 w-full flex flex-col'>
              <h4 className='text-xl font-medium capitalize'>{comment.name}</h4>
              <span className='mt-2 text-sm text-gray-400'>{comment.email}</span>
              <p className='mt-4 text-md font-medium'>{comment.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PostComments;