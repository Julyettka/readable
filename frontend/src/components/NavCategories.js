import React from 'react'
import {Link} from 'react-router-dom'
import { Component } from 'react'
import { getCategories } from '../actions/categories'
import {getPostsbyCategory} from '../actions/posts'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Posts.js'


class NavCategories extends Component{
	componentDidMount() {
        this.props.getCategories();
    }

	currentNavRoute(){
		let url = window.location.href;
		url = url.split('/');
		let ln = url.length;
		url = url[ln - 1];
		return url;
	}

	render(){
		const NavRoute = this.currentNavRoute();
		const categories = this.props.categories || [];
		return(<div>
				<ul className="upper-nav">
				<Link style={{textDecoration:'none', color: 'rgb(2, 179, 228)'}}
					to="/">
					<li value=""
					className={'' === NavRoute ? "selected" : ""}
					>all</li>
				</Link>
				{categories.map((category) =>
					<li
					value={category.name}
					className={category.name === NavRoute ? "selected" : ""}
					key={category.path}>
						<Link style={{textDecoration:'none', color: 'rgb(2, 179, 228)'}}
					to={`/${category.path}`}>{category.name}</Link>
					</li>
				)}
			</ul>
			<div className="container-plate">
				<Posts/>
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
  { getCategories, getPostsbyCategory }
)(NavCategories));