import React from 'react'
import { Component } from 'react'
import { getComments, upVoteComment, downVoteComment } from '../actions/comments'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import AddComment from './AddComment'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'


class Comments extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getComments(id);
	}

	state = {
		author: '',
		body: '',
		invalid: false,
		success: false,
		edited: false,
		modalIsOpen: false
	}

	onClickUpVote = (id) => {
    	this.props.upVote(id)
  	}

  	onClickDownVote = (id) => {
    	this.props.downVote(id)
  	}

  	openModal = this.openModal.bind(this);
	closeModal = this.closeModal.bind(this);

	openModal(){
	    this.setState({modalIsOpen: true});
	    console.log(this.state);
		console.log(this.state.modalIsOpen);
	  }
	  closeModal(){
	  	this.setState({modalIsOpen: false});
	  	console.log(this.state.modalIsOpen);
	  }

  	onClickCommentEdit = (id) => {
  		console.log(id);
  		this.openModal();
  		//call Modal
  		//filter comment details from comments based on id we get
  		//state that have comments details

  	}

  	onAuthorChange(author){
 		this.setState({author: author.target.value})
 	}

 	onCommentChange(text){
 		this.setState({comment: text.target.value})
 	}

 	onSaveComment(){
 		if(this.state.author && this.state.comment){
 		}
 	}

	render(){
		let comments = this.props.comments || [];
		comments = Object.keys(this.props.comments).map((data)=>(this.props.comments[data] || []))
		let commentsNum = comments.length;
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
					        	<i onClick={() => this.onClickCommentEdit(comment.id)} className="fa fa-pencil" aria-hidden="true"></i>
					    		<i className="fa fa-trash-o" aria-hidden="true"></i>
					        </div>
							</li>
						  )}
					</ul>
					<AddComment/>
				</div>
				<Modal
				isOpen={this.state.modalIsOpen}
				onRequestClose={this.closeModal}
					  className="modal-edit"
					  contentLabel="Modal">
					  <h3> Edit your comment</h3>
					  <form>
					<input type="text" placeholder="Name"
					className="author" value={this.state.author}
					onChange={(e) => this.onAuthorChange(e)}/>
					<textarea className="commentarea"
					placeholder="Your comment..." value={this.state.comment}
					onChange={(e) => this.onCommentChange(e)}></textarea>
				</form>
				<div type="button" onClick={this.onSaveComment.bind(this)}
				className="changes-button">Save changes</div>

					  <button className="close-modal" onClick={this.closeModal}> X </button>
				</Modal>
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