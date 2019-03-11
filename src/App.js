import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FeedList from './components/Feed/FeedList'
import RouteMap from './components/Travel/RouteMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        	<Switch>
	        	<Route path='/' exact component={FeedList} />
	        	<Route path='/map' exact component={RouteMap} />
        	</Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
