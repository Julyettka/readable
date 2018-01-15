// import React from 'react'
// import { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
// import Modal from 'react-modal'
// import uuidv1 from 'uuid/v1'
// import {editComment} from '../actions/comments'

// class EditComment extends Component{
// 	ComponentDidMount(){
// 		const {id} = this.props.match.params.id;
// 		console.log(this.props.match.params);
// 		this.props.editComment(id);
		
// 	}

// 	render(){
// 		console.log(this.props.match.params);
// 		return(
// 			<div>
// 			Bla bla
// 			</div>
// 			)
// 	}
// }


// function mapStateToProps({comment}) {
//     return comment
// }

// function mapDispatchToProps(dispatch){
// 	editComment: (id) => dispatch(editComment(id))
// }

// export default withRouter(connect(mapStateToProps,
//   mapDispatchToProps
// )(EditComment));
