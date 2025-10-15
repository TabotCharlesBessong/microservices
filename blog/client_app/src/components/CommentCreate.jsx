
import axios from 'axios'
import React from 'react'

const CommentCreate = ({ postId }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    
    // Add the postId to the data
    data.postId = postId

    await axios.post(`http://localhost:9000/posts/${postId}/comments`, data);
    
    // Reset the form after submission
    event.target.reset()
  }

  return (
    <div className="comment-create mt-3">
      <h6>Add a Comment</h6>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor={`content-${postId}`}>Content</label>
          <textarea 
            id={`content-${postId}`} 
            name="content" 
            className="form-control" 
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Submit Comment</button>
      </form>
    </div>
  )
}

export default CommentCreate