import React from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostCard = ({ post }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">Post ID: {post.id}</p>
        
        {/* Comment creation form for this specific post */}
        <CommentCreate postId={post.id} />
        
        {/* List of comments for this specific post */}
        <CommentList postId={post.id} />
      </div>
    </div>
  )
}

export default PostCard