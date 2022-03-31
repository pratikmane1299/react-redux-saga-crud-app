import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createPostBegin } from "../actions/post.actions";

import PostForm from "../components/PostForm";

export const CreatePost = ({ loading, createPostBegin }) => {
  const navigate = useNavigate();

  function handleOnSubmit(newPostData) {
    createPostBegin(newPostData);
    navigate('/');
  }

  return (
    <PostForm loading={loading} onSubmit={handleOnSubmit} />
  );
};

const mapStateToProps = (state) => ({
  loading: state.postsReducer.loading,
});

const mapDispatchToProps = {
  createPostBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
