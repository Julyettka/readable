import React from 'react'
import { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getPosts, getOnePost} from '../actions/posts'

class PostDetailed extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getOnePost(id);
		console.log(this.props.getOnePost(id));
	}
	render(){
		console.log(post);
		const post = this.props.post || [];
		return(
			<div>
		        <div className="date">bfsfjslfsl</div>
		        <div className="title"></div>
		        <div className="author">by </div>
		        <div className="snap"></div>
		        <div className="category"></div>
		        <div className="vote"><i className="fa fa-thumbs-up" aria-hidden="true"></i>
		        </div>
		    </div>
			)
	}
}

function mapStateToProps({post}){
	return {
		post
	}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getOnePost: (id) => dispatch(getOnePost(id))
//     }
// }

export default withRouter(connect(mapStateToProps,
  { getOnePost }
)(PostDetailed));
