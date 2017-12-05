import React from 'react'
import { Component } from 'react'
import Header from './Header.js'
import HeaderAddPost from './HeaderAddPost.js'
import Post from './Post.js'
import NavCategories from './NavCategories.js'
import AddPost from './AddPost.js'
import {Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../actions/categories';

class App extends Component{

    render(){
        return (<div>
        	<Route exact path='/' render={()=>(
        		<div>
		            <Header/>
		            <NavCategories/>
		            <div className="container-plate"><Post/></div>
		        </div>
        	)}
        	/>
        	<Route exact path='/add' render={()=> (
        		<div>
        			<HeaderAddPost/>
        			<AddPost/>
        		</div>
        		)}
        	/>
        </div>)
    }
}

export default withRouter(connect(undefined,
  { fetchCategories: getCategories }
)(App));

