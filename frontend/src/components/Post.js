import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getPosts} from '../actions/posts'


class Post extends Component{
	componentDidMount(){
		this.props.getPosts()
		console.log(this.props.getPosts());
	}
	render(){
		const posts = [] || this.props.posts;
		console.log(posts);
		return(
			<div className="post-plate">
		        <div className="date">10 oct 2018</div>
		        <div className="title">New Post</div>
		        <div className="author">D. Julia Holmes</div>
		        <div className="snap">Bla bla bla, I'm taking a cat</div>
		        <div className="vote">2</div>
    		</div>)
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