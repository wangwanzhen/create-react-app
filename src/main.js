import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './redux/configureStore'
import makeRoutes from './routes/index'
import './index.css';


window.__INITIAL_STATE__ = {user: {realName: 'wwz'}}
const initialState = window.__INITIAL_STATE__

const store = configureStore(initialState)
const routes = makeRoutes(store)


ReactDOM.render(<Root store={store} routes={routes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
