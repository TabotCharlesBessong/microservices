
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CommentList = () => {
  // fetching all comments from the comments service
  // const comments = [
  //   { id: '1', content: 'Great post!' },
  //   { id: '2', content: 'Thanks for sharing.' }
  // ]

  // fetching with axios and adding useEffect and useState
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get('http://localhost:9000/comments')
      setComments(response.data)
    }

    fetchComments()
  }, [])

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {/* getting an error, comments.map is not a function */}
        {Array.isArray(comments) && comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default CommentList