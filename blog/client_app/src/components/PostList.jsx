
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    // add class name for styling
    <div className="post-list">
      <h1>Posts</h1>
      <ul className='list-group'>
        {Object.values(posts).map(post => (
          <li key={post.id} className='list-group-item'>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList