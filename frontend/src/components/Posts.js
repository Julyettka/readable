import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPosts, upVotePost, downVotePost, changeSort, deletePost } from '../actions/posts'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Sorting from './Sorting'
import PostStat from './PostStat'

class Posts extends Component{
	componentDidMount(){
		this.props.getPosts();
	}

	state = {
		deleted: false
	}
	currentCategoryRoute(){
		const {category} = this.props.match.params;
		return category;
	}

	onClickUpVote = (id) => {
		this.props.upVote(id)
	}

	onClickDownVote = (id) => {
		this.props.downVote(id)
	}

	onClickDelete = (id) => {
		console.log(id)
		this.props.deletePost(id)
		.then(() => {
        this.setState({
          deleted: true
        })
      })
	}
	render(){

		//console.log(this.props.sort);
		const categoryRoute = this.currentCategoryRoute();
		let posts = Object.keys(this.props.posts).map((data)=>(this.props.posts[data] || []))
		//console.log(posts);
		if (categoryRoute){
			posts = posts.filter(post => post.category === categoryRoute);
		}
		if (this.props.sort === 'not_popular'){
			posts.sort(function(a, b)
				{return a.voteScore - b.voteScore});
		}

		if (this.props.sort === 'popular'){
			posts.sort(function(a, b)
				{return b.voteScore - a.voteScore});
		}

		if (this.props.sort === 'time'){
			posts.sort(function(a, b)
				{return b.timestamp - a.timestamp});
		}

		posts = posts.filter(post => post.deleted === false)
		//console.log(posts)
		return(
			<div>
			<Sorting/>
				<ul className="container-plate">
					{ posts.map((post) =>
					<li key={post.id} className="post-plate">
					<Link style={{textDecoration:'none', color: 'black'}}
					to={`/${post.category}/${post.id}`}>
				        <div className="date">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
				        <div className="title">{post.title}</div>
				        <div className="author">by {post.author}</div>
				        <div className="snap">{post.body}</div>
		    		</Link>
				        <Link to={`/${post.category}`}><div className="category">{post.category}</div></Link>
				        <div className="stat">
				        	<i onClick={() => this.onClickUpVote(post.id)}className="fa fa-thumbs-up"></i>
				        	{post.voteScore}
				        	<i onClick={() => this.onClickDownVote(post.id)}className="fa fa-thumbs-down"></i>
				        	<Link to={`/edit/${post.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
			    			<i onClick={() => this.onClickDelete(post.id)} className="fa fa-trash-o" aria-hidden="true"></i>
				        </div>
		    		</li>
		    		)}
				{posts.length === 0 &&
					<h3> No posts in {this.props.chosenCat} category.  Be the first to write here!
					</h3>
				}
		    	</ul>
		    	</div>
	    	)
	}
}

function mapStateToProps({posts, sort}){
	return {
		posts,
		sort: sort.sort
	}
}

function mapDispatchToProps(dispatch){
	return {
		getPosts: () => dispatch(getPosts()),
		upVote: (id) => dispatch(upVotePost(id)),
        downVote: (id) => dispatch(downVotePost(id)),
        changeSort: (value) => dispatch(changeSort(value)),
        deletePost: (id) => dispatch(deletePost(id))
	}
}

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps
)(Posts));