import React from 'react'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

const App = () => {
  return (
    <div className="container">
      <h1>Create a New Post</h1>
      <PostCreate />
      <PostList />
    </div>
  )
}

export default App