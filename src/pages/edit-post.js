import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { requestFetchPost, editPostBegin } from "../actions/post.actions";

export const EditPost = ({ loadingPost, post, loading, requestFetchPost, editPostBegin }) => {
  const [formState, setFormState] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    requestFetchPost(postId);
  }, [postId, requestFetchPost]);

  useEffect(() => setFormState({ title: post.title, body: post.body }), [post]);

  function handleOnChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    editPostBegin(postId, formState);
    setFormState({title: '', body: ''});
    navigate('/');
  }

  return (
    <>
      {!loadingPost && post && (
        <div className="px-2 py-4 w-full h-full">
          <h1 className="text-3xl font-medium">Edit Post</h1>
          <form className="mt-4 w-full flex flex-col" onSubmit={handleOnSubmit}>
            <div className="w-full flex flex-col rounded-md">
              <label className="text-base font-medium rounded-md">Title</label>
              <input
                name="title"
                type="text"
                className="bg-white px-2 py-2 text-lg"
                value={formState.title}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mt-4 w-full flex flex-col rounded-md">
              <label className="text-base font-medium rounded-md">Body</label>
              <textarea
                name="body"
                className="bg-white px-2 py-2 text-lg"
                rows={5}
                value={formState.body}
                onChange={handleOnChange}
                required
              ></textarea>
            </div>
            <button
            disabled={loading}
            className="mt-4 py-2 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-800 focus:ring-2 focus:border-0 focus:ring-offset-2 focus:ring-red-800">
            {loading ? '...' : 'Submit'}
          </button>
          </form>
        </div>
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
