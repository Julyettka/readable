import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getPosts} from '../actions/posts'
import moment from 'moment'
import { Link } from 'react-router-dom'

class Posts extends Component{
	componentDidMount(){
		this.props.getPosts();
	}
	currentCategoryRoute(){
		const {category} = this.props.match.params;
		return category;
	}

	render(){
		const categoryRoute = this.currentCategoryRoute();
		//console.log(categoryRoute);
		let posts = Object.keys(this.props.posts).map((data)=>(this.props.posts[data] || []))
		if (categoryRoute){
			posts = posts.filter(post => post.category === categoryRoute);
		}
		return(
			<ul className="container-plate">
			{posts.map((post) =>
				<li key={post.id} className="post-plate">
				<Link style={{textDecoration:'none', color: 'black'}}
				to={`/${post.category}/${post.id}`}>
			        <div className="date">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
			        <div className="title">{post.title}</div>
			        <div className="author">by {post.author}</div>
			        <div className="snap">{post.body}</div>
	    		</Link>
			        <div className="category">{post.category}</div>
			        <div className="vote">
			        	<i className="fa fa-thumbs-up"></i>
			        	{post.voteScore}
			        	<i className="fa fa-thumbs-down"></i>
			        </div>
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
)(Posts));