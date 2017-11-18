import React from 'react'
import {Component} from 'react'
import Header from './Header.js'
import Plate from './Plate.js'
import Navigation from './Navigation.js'
import AddPost from './AddPost.js'
import {Route} from 'react-router-dom'

class App extends Component{
    render(){
        return (<div>
        	<Route exact path='/' render={()=>(
        		<div>
		            <Header/>
		            <Navigation/>
		            <div className="container-plate"><Plate/></div>
		        </div>
        	)}
        	/>
        	<Route exact path='/add' render={()=> (
        		<div>
        			<Header/>
        			<AddPost/>
        		</div>
        		)}
        	/>
        </div>)
    }
}

export default App;

