import React from 'react'
import { Component } from 'react'
import { getCategories } from '../actions/categories'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Post from './Post.js'


class NavCategories extends Component{
	state = {
    	CatClicked: ''
	}

	onCategoryNavChange = (CatClicked) => {
  		this.setState({CatClicked});
	}

	componentDidMount() {
        this.props.getCategories()
    }

	render(){
		const categories = this.props.categories || [];
		return(<div>
				<ul className="upper-nav">
				<li value=""
				className={'' === this.state.CatClicked ? "selected" : ""}
				onClick={()=> this.onCategoryNavChange("")}>all</li>
				{categories.map((category) =>
					<li onClick={() => this.onCategoryNavChange(category.name)}
					value={category.name}
					className={category.name === this.state.CatClicked ? "selected" : ""}
					key={category.path}>
						<a>{category.name}</a>
					</li>
				)}
			</ul>
			<div className="container-plate">
				<Post chosenCat={this.state.CatClicked}/>
			</div>
			</div>)
	}
}

function mapStateToProps({categories}){
	return {
		categories
	}
}

export default withRouter(connect(mapStateToProps,
  { getCategories }
)(NavCategories));