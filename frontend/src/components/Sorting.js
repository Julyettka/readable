 import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeSort } from '../actions/posts'

class Sorting extends Component{

	onChangeSort = (e) => {
		this.props.changeSort(e.target.value);
	}

  	render(){
  		return(
			<div className="sort">
				<span>Sort by </span>
				<select className="cat-select" name="sort" onChange={this.onChangeSort}>
					<option value="popular">popular</option>
					<option value="not_popular">not popular</option>
					<option value="time">latest</option>
				</select>
			</div>
			)
  	}

}

const mapStateToProps = ({ sort }) => {
  return {
    sort: sort
  }
}

function mapDispatchToProps(dispatch){
	return {
        changeSort: (value) => dispatch(changeSort(value))
	}
}

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps
)(Sorting));