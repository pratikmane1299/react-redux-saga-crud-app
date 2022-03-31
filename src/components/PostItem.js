import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoreVertical } from "react-feather";

import PostActionDropdown from "./PostActionDropdown";

function PostItem({ post, navigate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-4 mb-4 w-full bg-slate-100 border rounded-lg shadow">
      <div className="w-full flex justify-between">
        <h2 className="text-lg lg:text-2xl font-medium capitalize">
          <Link to={`/${post.id}`}>{post.title}</Link>
        </h2>
        <div className="relative">
          <button
            className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 flex justify-center items-center rounded-md hover:bg-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <MoreVertical />
            </span>
          </button>
          {isOpen && (
            <PostActionDropdown
              onEdit={() => navigate(`${post.id}/edit`)}
              onDelete={() => {
                onDelete(post.id);
                setIsOpen(false);
              }}
            />
          )}
        </div>
      </div>
      <p className="mt-4 text-sm lg:text-md text-gray-700">{post.body}</p>
    </div>
  );
}

export default PostItem;
