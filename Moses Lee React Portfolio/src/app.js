import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore } from 'react-redux';
import { applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PensPage from './pages/PensPage';

import AppWrapper from './layouts/AppWrapper';

import store from './store'; 

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = props => (
	<Provider store={store}>
		<BrowserRouter>
			<AppWrapper>
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/codepens" component={PensPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</AppWrapper>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

export default App;