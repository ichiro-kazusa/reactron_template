import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './dashboard/Dashboard'
import DashboardContent from './dashboard/DashboardContent'
import OrderContent from './dashboard/OrderContent'
import CustomerContent from './dashboard/CustomerContent'
import * as reducers from './reducers'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'


const store = createStore(
    combineReducers(reducers),
    // applyMiddleware(logger)
)


function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route exact path="/" render={() => { return (<Dashboard title="Dashboard"><DashboardContent /></Dashboard>) }} />
                <Route path="/order" render={() => { return (<Dashboard title="Orders" ><OrderContent /></Dashboard>) }} />
                <Route path="/customer" render={() => { return (<Dashboard title="Customers" ><CustomerContent store={store} /></Dashboard>) }} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp())
renderApp()