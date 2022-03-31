import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostsList from "./pages/post-listing";
import PostDetail from "./pages/post-detail";
import CreatePost from "./pages/create-post";
import EditPost from "./pages/edit-post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/:postId" element={<PostDetail />} />
        <Route path="/:postId/edit" element={<EditPost />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
