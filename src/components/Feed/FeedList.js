import React, { Component } from 'react'
import { parseString } from 'xml2js'
import Articles from './Articles'

const url = '/rss.xml'
// const url = 'http://feeds.bbci.co.uk/news/rss.xml'

class FeedList extends Component {

	state = {
		articles: null
	}

	componentDidMount = () => {
		this.fetchData();
	}

	fetchData = () => {
		fetch(url)
			.then((response) => {
				return response.text()
			})
			.then((response) => {
				parseString(response, (err, result) => {
					if (!err) {
						this.setState({
							articles: result.rss.channel[0].item
						})
					}
				})
			})
			.catch(error => {
				console.log(error)
			});
	}

	render() 
	{
		return (
			<div>
				<p>FeedList</p>
				{ this.state.articles ?
					<Articles items={this.state.articles} />
				: null }	
			</div>
		)

		}
	}

export default FeedList

