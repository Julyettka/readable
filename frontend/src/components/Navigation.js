import React from 'react'
import ReactDOM from 'react-dom'

const categories = ['All', 'Art', 'Businness', 'Education'];

const Navigation = () => (React.createElement('ul', {className: "upper-nav"},
	categories.map((category, index) => (React.createElement('li', {key: index}, category))))
	)

export default Navigation;