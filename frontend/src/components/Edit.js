import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Edit extends Component{
	componentDidMount(){
		const { id } = this.props.match.params;
		console.log(this.props.match.params);
	    //this.props.getOnePost(id);
	}

	state = {

	}
	
	render(){
		return( <div>
			</div>
			)
	}
}

function mapStateToProps(){

}

function mapDispatchToProps(dispatch){

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));