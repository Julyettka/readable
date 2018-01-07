import React from 'react'
import {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { getCategories } from '../actions/categories'
import {addPost} from '../actions/posts'
import { connect } from 'react-redux'

class AddPost extends Component{
	componentDidMount(){
		this.props.getCategories();
		//this.props.addPost();
	}

	state = {
		title: '',
		author: '',
		text: '',
		category: ''
	}

	render(){
		const categories = this.props.categories || [];
		return(
			<div>
				<div className="containter-post">
					<form>
						<input placeholder="Title" className ="title"/><br />
						<input placeholder="Autor name" className ="author"/><br />
						<select className="cat-select">
							{categories.map(cat => <option key={cat.path}>{cat.name}</option>) }
						</select>
						<textarea placeholder="Text..." className ="textarea"></textarea>
					</form>
					<div className="save-button">Save post</div>
				</div>
			</div>)
	}
}

function mapStateToProps(categories){
	return categories
}

function mapDispatchToProps(dispatch){
	return{
		getCategories: () => dispatch(getCategories())
	}
}

export default withRouter(connect(mapStateToProps,
	mapDispatchToProps)(AddPost));