
import axios from 'axios'
import React from 'react'


const CommentCreate = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    await axios.post(`http://localhost:9000/posts/${data.postId}/comments`, data);
  }

  return (
    <div className="comment-create">
      <h2>Create a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postId">Post ID</label>
          <input type="text" id="postId" name="postId" required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate