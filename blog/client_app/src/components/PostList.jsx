
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:8000/posts')
      setPosts(response.data)
    }

    fetchPosts()
  }, [])

  return (
    <div className="post-list">
      <h1>Posts</h1>
      <div className="posts-container">
        {Object.values(posts).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostList