import React, { Component } from 'react'

class Article extends Component {

	render() 
	{
		let { title, image, description } = this.props

		return (
			<div className="article">
				<img src={ image } />
				<h3>{ title }</h3>
				<p>{ description }</p>
			</div>
		)

		}
	}

export default Article

