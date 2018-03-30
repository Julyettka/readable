import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({ location }) => (
  <div className="container">
    <h1>Oops!</h1>
    <p>We can't find the page you're looking for.</p>
    <div className="img-404"></div>
	<p>Error code: 404.</p>
	<p>Here are some helpful links instead:</p>
    <Link to='/' style={{textDecoration:'none'}}>Home</Link>
  </div>
);

export default NotFound;