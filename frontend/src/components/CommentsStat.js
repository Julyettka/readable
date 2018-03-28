import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getComments} from '../actions/comments'

class CommentsStat extends Component{
	componentDidMount(){
		const id = this.props.id;
		this.props.getComments(id);
	}
	render(){

 		let count = this.props.comments;
 		//console.log(count.length);
		return (
			<span className="comment-details">
			{count.length} Comment
			</span>
			)
	}
}

function mapStateToProps({comments}) {
    return {comments: comments}
}

export default withRouter(connect(mapStateToProps,
  {getComments}
)(CommentsStat));
