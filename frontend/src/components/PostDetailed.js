import React from 'react'
import { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getOnePost} from '../actions/posts'
import Comments from './Comments'

class PostDetailed extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		console.log(id);
		this.props.getOnePost(id);
	}
	render(){
		const post = this.props.post;
		console.log(post);
		return(
			<div className="container">
				<div className="avatar"></div>
		        <div className="author-post">{post.author}</div>
		        <div className="date-post">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
		        <div className="category-post">
		        	<span className="category-title">categories:</span> {post.category}</div>
		        <div className="title-post">{post.title}</div>
		        <div className="snap-post">{post.body}</div>
		        <div className="vote-post">
		        	<i className="fa fa-thumbs-up"></i>
			        {post.voteScore}
			        <i className="fa fa-thumbs-down"></i>
			        <i className="fa fa-pencil" aria-hidden="true"></i>
			    	<i className="fa fa-trash-o" aria-hidden="true"></i>
			    </div>
		    <Comments />
		    </div>
			)
	}
}

function mapStateToProps(post) {
    return post
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getOnePost: (id) => dispatch(getOnePost(id))
//     }
// }

export default withRouter(connect(mapStateToProps,
  { getOnePost }
)(PostDetailed));
