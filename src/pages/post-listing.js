import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { requestFetchAllPosts } from '../actions/posts.actions';
import { deletePostBegin } from '../actions/post.actions';

import PostItem from "../components/PostItem";

export const PostsList = ({ posts, loading, requestFetchAllPosts, deletePostBegin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    requestFetchAllPosts();
  }, [requestFetchAllPosts])

  function handleOnDelete(postId) {
    deletePostBegin(postId);
  }

  return <div className="w-full flex justify-center items-center">
    {posts.length > 0 && (
      <div className="w-full flex flex-col">
        <div className="mb-4 w-full flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-slate-100">Posts</h1>
          <Link to="/create-post" className="px-2 py-2 text-sm font-semibold rounded-md text-slate-100 bg-red-600 hover:bg-red-800 hover:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-red-600">Create Post</Link>
        </div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} navigate={navigate} onDelete={handleOnDelete} />
        ))}
      </div>
    )}
    {loading && <div><span>Loading...</span></div>}
  </div>;
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading,
});

const mapDispatchToProps = {
  requestFetchAllPosts,
  deletePostBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
