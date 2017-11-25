import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/combined'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>, document.getElementById('root'));
