import React from 'react'
import { Component } from 'react'
import Header from './Header.js'
import NavCategories from './NavCategories.js'
import AddPost from './AddPost.js'
import {Route, Switch} from 'react-router-dom'
import PostDetailed from './PostDetailed.js'
import Edit from './Edit.js'
import EditComment from './EditComment.js'

class App extends Component{
    render(){
        return (<div>
		      <Header/>
              <Switch>
                <Route exact path='/' component={NavCategories}/>
        	    <Route exact path='/add' component={AddPost}/>
                <Route exact path='/:category' component={NavCategories}/>

                <Route exact path='/edit/:id' component={Edit}/>
                <Route path='/:category/:id' component={PostDetailed}/>
              </Switch>
        </div>)
    }
}

export default App;

