import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      - 404 - Page Not Found
      <Link to='/'> Go home </Link>
    </div>
  )
}

export default NotFoundPage
