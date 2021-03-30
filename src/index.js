import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './quiz/App.css';
import App from './quiz/App.js';
import reportWebVitals from './reportWebVitals';

const FourOfour = () => <h1 className="four-o-four">404 Page not found.</h1>;

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route component={FourOfour} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

reportWebVitals();
