import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestFetchPost } from '../actions/post.actions';

import BylineCard from '../components/BylineCard';
import PostComments from '../components/PostComments';

const PostDetail = ({ post, loading, requestFetchPost }) => {
  const { postId } = useParams();

  useEffect(() => {
    requestFetchPost(postId)
  }, [postId, requestFetchPost]);
  return (
    <div className='w-full flex flex-col'>
      {!loading && Object.keys(post).length > 0 && (
        <div className='w-full h-full flex flex-col'> 
          <h1 className='text-2xl lg:text-5xl font-semibold capitalize dark:text-gray-100'>{post.title}</h1>
          <p className='mt-8 text-lg lg:text-xl dark:text-gray-100'>{post.body}</p>
          <div className='mt-4 w-full'>
            <span className='text-base font-thin dark:text-gray-100'>Comments:</span>
            <PostComments comments={post.comments} />
          </div>
          <hr className='mt-4' />
          <div className='py-10 w-full flex justify-center'>
            <BylineCard bylineInfo={post.author} />
          </div>
        </div>
      )}
      {loading && <span>Loading...</span>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
  loading: state.postReducer.loading,
});

const mapDispatchToProps = {
  requestFetchPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)