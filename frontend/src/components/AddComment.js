import React from 'react'
import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { addComment } from '../actions/comments'
import {getOnePost} from '../actions/posts'
import uuidv1 from 'uuid/v1'
import Modal from 'react-modal'

class AddComment extends Component{
	componentDidMount() {
	    const { id } = this.props.match.params;
	    this.props.getOnePost(id);
  }
	state = {
		author: '',
		comment: '',
		invalid: false,
		success: false,
		modalIsOpen: false
	}

	onAuthorChange(author){
		console.log(author.target.value);
 		this.setState({author: author.target.value})
 	}

 	onCommentChange(text){
 		this.setState({comment: text.target.value})
 	}

 	onSaveComment(){
 		if(this.state.author && this.state.comment){
 			const newComment = {
 				id: uuidv1(),
				timestamp: Date.now(),
				author: this.state.author,
				body: this.state.comment,
				parentId: this.id,
 			}

 			this.props.addCommentClick(newComment)
 			.then(() => {
 				this.setState({
		 			success: true,
		 			author: '',
		 			comment: '',
		 			invalid: false
	 			})
 			})
 		this.openModal();
 		} else {
	 		this.setState({
	 			invalid: true,
	 			success: false
	 		})
	 	}
 	}

 	openModal = this.openModal.bind(this);
	 closeModal = this.closeModal.bind(this);

	openModal(){
	    this.setState({modalIsOpen: true});
	  }
	  closeModal(){
	  	this.setState({modalIsOpen: false});
	  }

	render(){
		return(
			<div className="new-comment">
				<Modal
				  isOpen={this.state.modalIsOpen}
				   closeTimeoutMS={4}
				  onRequestClose={this.closeModal}
				  className="modal-success"
				  contentLabel="Modal"
				>
					<i className="fa fa-check"></i>
					<h1>Hooray!</h1>
				  <p>Your comment has been successfully added</p>
				  <button className="close-modal" onClick={this.closeModal}> X </button>
				</Modal>
				<h3>Leave a comment</h3>
				<form>
					<input type="text" placeholder="Name"
					className="author" value={this.state.author}
					onChange={(e) => this.onAuthorChange(e)}/>
					<textarea className="commentarea"
					placeholder="Your comment..." value={this.state.comment}
					onChange={(e) => this.onCommentChange(e)}></textarea>
				</form>
				<div type="button" onClick={this.onSaveComment.bind(this)}
				className="comment-button">Comment</div>
			</div>
			)
	}
}

function mapStateToProps({post}){
	return post
}

function mapDispatchToProps(dispatch){
	return{
		getOnePost: (id) => dispatch(getOnePost(id)),
		addCommentClick: (comment) => dispatch(addComment(comment))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddComment));