import React from 'react'
import { Component } from 'react'
import Header from './Header'
import NavCategories from './NavCategories'
import AddPost from './AddPost.js'
import {Route, Switch} from 'react-router-dom'
import PostDetailed from './PostDetailed'
import EditPost from './EditPost'
import NotFound from './NotFound'

class App extends Component{
    render(){
        return (<div>
		      <Header/>
              <Switch>
                <Route exact path='/' component={NavCategories}/>
                <Route exact path='/add' component={AddPost}/>
                <Route exact path='/:category' component={NavCategories}/>
                <Route path='/:category/:id' component={PostDetailed}/>
                <Route exact path='/edit/:id' component={EditPost}/>
                <Route component={NotFound}/>
              </Switch>
        </div>)
    }
}

export default App;

