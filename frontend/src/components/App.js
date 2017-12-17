import React from 'react'
import { Component } from 'react'
import Header from './Header.js'
import NavCategories from './NavCategories.js'
import AddPost from './AddPost.js'
import {Route, Switch} from 'react-router-dom'
import { getCategories } from '../actions/categories'
import PostDetailed from './PostDetailed.js'

class App extends Component{
    render(){
        return (<div>
		      <Header/>
              <Switch>
                <Route exact path='/' component={NavCategories}/>
        	    <Route path='/add' component={AddPost}/>
                <Route path='/:category/:id' component={PostDetailed}/>
              </Switch>
        </div>)
    }
}

export default App;

