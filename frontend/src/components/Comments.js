import React from 'react'
import { Component } from 'react'
import { getComments, upVoteComment, downVoteComment } from '../actions/comments'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import AddComment from './AddComment'

class Comments extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getComments(id);
	}

	onClickUpVote = (id) => {
    	this.props.upVote(id)
  	}

  	onClickDownVote = (id) => {
    	this.props.downVote(id)
  	}

	render(){
		let comments = this.props.comments || [];
		let commentsNum = comments.length;
		comments = Object.keys(this.props.comments).map((data)=>(this.props.comments[data] || []))
		//console.log(comments);
		return(
			<div>
				<div className="container-comments">
					<h3>{commentsNum > 1 ? `${commentsNum} Comments` :
					 `${commentsNum} Comment`}</h3>
					<ul>
						{comments.map((comment) =>
							<li className="comment-plate" key={comment.id}>
							<div className="avatar-comment"></div>
							<div className="author-comment">{comment.author}</div>
							<div className="date-comment">{moment(comment.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
							<div className="snap-comment">{comment.body}</div>
							<div className="vote-post">
								<i onClick={() => this.onClickUpVote(comment.id)}className="fa fa-thumbs-up"></i>
			        			{comment.voteScore}
			        			<i onClick={() => this.onClickDownVote(comment.id)}className="fa fa-thumbs-down"></i>
					        	<i className="fa fa-pencil" aria-hidden="true"></i>
					    		<i className="fa fa-trash-o" aria-hidden="true"></i>
					        </div>
							</li>
							)}
					</ul>
					<AddComment/>
				</div>
			</div>
			)
	}
}

function mapStateToProps({comments}){
	return {
		comments
	}
}

function mapDispatchToProps (dispatch){
    return {
    	getComments: (id) => dispatch(getComments(id)),
        upVote: (id) => dispatch(upVoteComment(id)),
        downVote: (id) => dispatch(downVoteComment(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps
)(Comments));