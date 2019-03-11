import React, { Component } from 'react'
import Article from './Article'

class Articles extends Component {

	renderArticle = (article, i) => {
		let image = article['media:content'][0]['$'].url
		let title = article.title[0]
		let description = article.description[0]
		return (
			<Article title={title} description={description} image={image} key={'article_' + i} />
		)
	}

	render() 
	{
		let { items } = this.props
		let articles = items.map((article, i) => this.renderArticle(article, i))

		return (
			<div>
				{ articles }
			</div>
		)

		}
	}

export default Articles

