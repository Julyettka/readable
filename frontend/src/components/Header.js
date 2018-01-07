import React from 'react'
import {Link} from 'react-router-dom'
import { Component } from 'react'

class Header extends Component{
	currentRoute(){
		let url = window.location.href;
		url = url.split('/');
		let ln = url.length;
		url = url[ln - 1];
		return url;
	}

	render(){
		const curRoute = this.currentRoute();
		return(
	    <div className="header">
	        <div className="container-header">
	            <Link to='/' style={{textDecoration:'none'}}>
	            	<div className="logo">Blog
	            		<span className="descr">about everything you wish to know</span>
	            	</div>
	            </Link>
	            {curRoute == 'add' ? '' : <Link to='/add'><button className="post-button">New Post</button></Link>}
	        </div>
	    </div>
	    )
	}
}

export default Header;