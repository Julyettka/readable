import React from 'react'
import {Link} from 'react-router-dom'


const HeaderAddPost = ()=>(
    <div className="header">
        <div className="container-header">
            <Link to='/' style={{textDecoration:'none'}}><div className="logo">Blog
            	<span className="descr">about everything you wish to know</span>
            </div></Link>
            	<Link to='/add'><button className="post-button">Post</button></Link>
        </div>
    </div>
    )

export default HeaderAddPost;