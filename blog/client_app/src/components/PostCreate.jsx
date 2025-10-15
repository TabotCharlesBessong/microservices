import axios from 'axios'
import { useState } from 'react'
import "./post.css"

const PostCreate = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      e.preventDefault()
      const response = await axios.post('http://localhost:8000/posts', { title })
      console.log(response.data)
      setTitle('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  )
}

export default PostCreate