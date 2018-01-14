import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getOnePost, upVotePost, downVotePost} from '../actions/posts'
import {Link} from 'react-router-dom'


class PostStat extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getOnePost(id);
	}

	onClickUpVote = (id) => {
		console.log(id);
		this.props.upVote(id)
	}

	onClickDownVote = (id) => {
		this.props.downVote(id)
	}
//to={`/${post.category}/${post.id}`}>
	render(){
		let post = this.props.post || [];
		return(
				<div className="vote-post">
		        	<i onClick={() => this.onClickUpVote(post.id)}className="fa fa-thumbs-up"></i>
			        	{post.voteScore}
			        <i onClick={() => this.onClickDownVote(post.id)}className="fa fa-thumbs-down"></i>
			        <Link to={`/edit/${post.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
			    	<i className="fa fa-trash-o" aria-hidden="true"></i>
			    </div>
			)
	}
}

function mapStateToProps({post}) {
    return post
}

function mapDispatchToProps(dispatch){
	return {
		getOnePost: (id) => dispatch(getOnePost(id)),
		upVote: (id) => dispatch(upVotePost(id)),
        downVote: (id) => dispatch(downVotePost(id))
	}
}

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps
)(PostStat));