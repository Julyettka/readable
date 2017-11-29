import React from 'react'
import { Component } from 'react'
import { getCategories } from '../actions/categories'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends Component{
	componentDidMount() {
        let categories = this.props.fetchCategories()
        .then((data) => {
            return data.categories;
        });     
    }
	render(){
		return(<ul className="upper-nav"></ul>)
	}
}

export default withRouter(connect(undefined,
  { fetchCategories: getCategories }
)(Navigation));