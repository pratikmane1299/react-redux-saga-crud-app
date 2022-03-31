import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { requestFetchPost, editPostBegin } from "../actions/post.actions";

import PostForm from "../components/PostForm";

export const EditPost = ({ loadingPost, post, loading, requestFetchPost, editPostBegin }) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    requestFetchPost(postId);
  }, [postId, requestFetchPost]);

  function handleOnSubmit(updatedPostData) {
    editPostBegin(postId, updatedPostData);
    navigate('/');
  }

  return (
    <>
      {!loadingPost && post && (
        <PostForm post={post} loading={loading} mode='edit' onSubmit={handleOnSubmit} />
      )}
      {loadingPost && <span>Loading...</span>}
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingPost: state.postReducer.loading,
  post: state.postReducer.post,
  loading: state.postsReducer.loading,
});

const mapDispatchToProps = {
  requestFetchPost,
  editPostBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
