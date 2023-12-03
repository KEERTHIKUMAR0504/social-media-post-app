import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    <ul>
      <li><Link to="/postpage/1">Post 1</Link></li>
      <li><Link to="/postpage/2">Post 1</Link></li>
      <li><Link to="/postpage/3">Post 1</Link></li>
      <li><Link to="/postpage/newpost">NewPost</Link></li>
      <br></br>
      <Outlet/>
    </ul>
    </>
  )
}

export default PostLayout