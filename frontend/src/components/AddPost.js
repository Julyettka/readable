import React from 'react'
import {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {Link, Redirect} from 'react-router-dom'
import { getCategories } from '../actions/categories'
import { addPost } from '../actions/posts'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import Modal from 'react-modal'

class AddPost extends Component{
	componentDidMount(){
		this.props.getCategories();
	}

	state = {
		title: '',
		author: '',
		category: 'react',
		body: '',
		invalid: false,
		success: false,
		modalIsOpen: false
	}

 	onTitleChange(title){
 		this.setState({title: title.target.value})
 	}

 	onAuthorChange(author){
 		this.setState({author: author.target.value})
 	}

 	onCategoryChange(category){
 		this.setState({category: category.target.value})
 	}

 	onBodyChange(text){
 		this.setState({body: text.target.value})
 	}

 	onPostClick(){
		if (this.state.title && this.state.category && this.state.author && this.state.body)
		{
	    const newPost = {
	        id: uuidv1(),
	        timestamp: Date.now(),
	        title: this.state.title,
	        author: this.state.author,
	        category: this.state.category,
	        body: this.state.body
	    }

	      this.props.addPostClick(newPost)
	        .then(() => this.setState({
	          success: true,
	          title: '',
	          author: '',
	          category: '',
	          body: '',
	          invalid: false
	        }))
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
		//console.log(this.state.modalIsOpen);
	  }
	  closeModal(){
	  	this.setState({modalIsOpen: false});
	  	//console.log(this.state.modalIsOpen);
	  }


	render(){
		if(this.state.success){
			return (<Redirect to='/' />)
		} else {
		const categories = this.props.categories || [];
		const listOpt = categories.map(cat =>
			<option value={cat.name} key={cat.path}>{cat.name}</option>
		)
		return(
			<div>
		        <div>
		          	<Modal
					  isOpen={this.state.modalIsOpen}
					   closeTimeoutMS={4}
					  onRequestClose={this.closeModal}
					  className="modal-success"
					  contentLabel="Modal"
					>
						<i className="fa fa-check"></i>
						<h1>Hooray!</h1>
					  <p>Your post has been successfully added</p>
					  <button className="close-modal" onClick={this.closeModal}> X </button>
					</Modal>
		        </div>
		        <div>
		          {this.state.invalid && (
		            <h3>Please enter all values...</h3>
		          )}
		        </div>
				<div className="containter-post">
					<form>
						<input type="text" value={this.state.title}
						placeholder="Title" className ="title"
						onChange={(e) => this.onTitleChange(e)}/><br />
						<input type="text" value={this.state.author}
						placeholder="Author name" className ="author"
						onChange={(e) => this.onAuthorChange(e)}/><br />
						<select className="cat-select"
							placeholder="Select category" value={this.state.category}
							onChange={(e) => this.onCategoryChange(e)}>
							{listOpt}
						</select>
						<textarea value={this.state.body}
						placeholder="Text..." className ="textarea"
						onChange={(e) => this.onBodyChange(e)}></textarea>
					</form>
					<div type="button" className="save-button"
					onClick={this.onPostClick.bind(this)} >Save post</div>
				</div>
			</div>)
		}	
	}
}

function mapStateToProps(categories){
	return categories
}

function mapDispatchToProps(dispatch){
	return{
		getCategories: () => dispatch(getCategories()),
		addPostClick: (post) => dispatch(addPost(post))
	}
}

export default withRouter(connect(mapStateToProps,
	mapDispatchToProps)(AddPost));