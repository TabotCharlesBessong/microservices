
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Fetch comments for the specific post
        const response = await axios.get(`http://localhost:9000/posts/${postId}/comments`)
        setComments(response.data)
      } catch (error) {
        console.error('Error fetching comments:', error)
        setComments([])
      }
    }

    if (postId) {
      fetchComments()
    }
  }, [postId])

  if (!Array.isArray(comments) || comments.length === 0) {
    return (
      <div className="comment-list mt-3">
        <h6>Comments</h6>
        <p className="text-muted">No comments yet. Be the first to comment!</p>
      </div>
    )
  }

  return (
    <div className="comment-list mt-3">
      <h6>Comments ({comments.length})</h6>
      <div className="comments-container">
        {comments.map(comment => (
          <div key={comment.id} className="comment-item p-2 mb-2 border rounded">
            <p className="mb-1">{comment.content}</p>
            <small className="text-muted">Comment ID: {comment.id}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentList