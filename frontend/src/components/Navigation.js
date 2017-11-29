import React from 'react'
import { Component } from 'react'
import { getCategories } from '../actions/categories'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends Component{
	componentDidMount() {
        this.props.getCategories() 
        console.log(this.props.getCategories())
    } 
	render(){
		const categories = this.props.categories || [];
		console.log(categories);
		return(<ul className="upper-nav">
				{categories.map((category) =>
					<li key={category.path}>{category.name}</li>
				)}
			</ul>)
	}
}

function mapStateToProps({categories}){
	return {
		categories
	}
}

export default withRouter(connect(mapStateToProps,
  { getCategories }
)(Navigation));