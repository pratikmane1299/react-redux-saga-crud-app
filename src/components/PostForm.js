import React, { useState } from 'react';

function PostForm({ loading, post = {}, mode = 'add', onSubmit }) {
  const [formState, setFormState] = useState({
    title: post?.title || "",
    body: post?.body || "",
  });

  function handleOnChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handlOnSubmit(e) {
    e.preventDefault();
    setFormState({title: '', body: ''});
    onSubmit(formState);
  }

  return (
    <div className="w-full h-full">
      <div className='px-4 py-4 mx-auto max-w-6xl bg-white dark:bg-gray-700 rounded-md'>
      <h1 className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-100">
        {mode === 'edit' ? 'Edit Post' : 'Create New Post'}
      </h1>
      <form className="mt-8 w-full flex flex-col" onSubmit={handlOnSubmit}>
        <div className="w-full flex flex-col rounded-md">
          <label className="mb-2 text-xs md:text-sm font-medium uppercase dark:text-gray-200">Title</label>
          <input
            name="title"
            type="text"
            className="bg-gray-200 outline-none dark:bg-gray-500 dark:text-gray-50 px-2 py-2 text-md md:text-lg rounded-md"
            value={formState.title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mt-4 w-full flex flex-col rounded-md">
          <label className="mb-2 text-xs md:text-sm font-medium uppercase dark:text-gray-200">Body</label>
          <textarea
            name="body"
            className="bg-gray-200 outline-none dark:bg-gray-500 dark:text-gray-50 px-2 py-2 text-md md:text-lg rounded-md"
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
    </div>
  );
}

export default PostForm;