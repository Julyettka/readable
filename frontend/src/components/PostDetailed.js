import React from 'react'
import { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getOnePost} from '../actions/posts'
import Comments from './Comments'
import PostStat from './PostStat'
import NotFound from './NotFound'

class PostDetailed extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getOnePost(id);
	}

	render(){
		let post = this.props.post || [];
		console.log((Object.keys(post).length));
		if (Object.keys(post).length) {
		return(
			<div className="container">
				<div className="avatar"></div>
				<div className="author-post">{post.author}</div>
		        <div className="date-post">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
		        <div className="category-post">
		        	<span className="category-title">categories: </span>
		        	<Link style={{textDecoration:'none', color: 'rgb(2, 179, 228)'}}
		        	to={`/${post.category}`}>{post.category}</Link>
		        </div>
		        <div className="title-post">{post.title}</div>
		        <div className="snap-post">{post.body}</div>
			    <PostStat />
		    <Comments />
		    </div>
			)
		} else{return (<NotFound/>)}
	}
}

function mapStateToProps({post}) {
    return post
}

export default withRouter(connect(mapStateToProps,
  {getOnePost}
)(PostDetailed));
