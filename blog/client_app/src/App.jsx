import React from 'react'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'
import CommentList from './components/CommentList'
import CommentCreate from './components/CommentCreate'

const App = () => {
  return (
    <div className="container">
      <h1>Create a New Post</h1>
      <PostCreate />
      <PostList />

      {/* <CommentList /> */}
      {/* <CommentCreate /> */}
      <CommentList />
      <CommentCreate />
    </div>
  )
}

export default App