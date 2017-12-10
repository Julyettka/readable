import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getPosts} from '../actions/posts'
import moment from 'moment'

class Post extends Component{
	componentDidMount(){
		this.props.getPosts();
	}

	render(){
		let posts = this.props.posts || [];
		if (this.props.chosenCat){
			posts = this.props.posts.filter(post => post.category === this.props.chosenCat) || [];
		}
		return(
			<ul className="container-plate">
			{posts.map((post) =>
				<li key={post.id} className="post-plate">
			        <div className="date">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
			        <div className="title">{post.title}</div>
			        <div className="author">by {post.author}</div>
			        <div className="snap">{post.body}</div>
			        <div className="category">{post.category}</div>
			        <div className="vote"><i className="fa fa-thumbs-up" aria-hidden="true"></i>
			        {post.voteScore}</div>
	    		</li>
	    		)}
			{posts.length === 0 &&
				<h3> No posts in {this.props.chosenCat} category.  Be the first to write here!
				</h3>
			}
	    	</ul>)
	}
}

function mapStateToProps({posts}){
	return {
		posts
	}
}

export default withRouter(connect(mapStateToProps,
  { getPosts }
)(Post));