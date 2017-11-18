import React from 'react'
import {Component} from 'react'
import Header from './Header.js'
import {Link} from 'react-router-dom'

class AddPost extends Component{
	render(){
		return(
			<div>
				<div className="containter-post">
					<form>
						<input placeholder="Title" className ="title"/><br />
						<input placeholder="Autor name" className ="author"/><br />
						<textarea placeholder="Text..." className ="textarea"></textarea>
					</form>
				</div>
			</div>)
	}
}

export default AddPost;