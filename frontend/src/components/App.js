import React from 'react'
import {Component} from 'react'
import Header from './Header.js'
import Plate from './Plate.js'
import Navigation from './Navigation.js'

class App extends Component{
    render(){
        return (<div>
            <Header/>
            <Navigation/>
            <div className="container-plate">
            	<Plate/>
            </div>
            </div>)
    }
}

export default App;

