import React from 'react'
import { Component } from 'react'
import { getCategories } from '../actions/categories'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const onCategoryNavChange = (catg) => {
  console.log(catg);
}

class NavCategories extends Component{
	componentDidMount() {
        this.props.getCategories()
    }

	render(){
		const categories = this.props.categories || [];
		return(<ul className="upper-nav">
				<li value="all" className="selected"
				onClick={()=> onCategoryNavChange("all")}>all</li>
				{categories.map((category) =>
					<li onClick={() => onCategoryNavChange(category.name)}
					value={category.name}
					key={category.path}>
						<a>{category.name}</a>
					</li>
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
)(NavCategories));