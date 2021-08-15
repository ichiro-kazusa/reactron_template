import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './components/Dashboard'
import DashboardContent from './components/DashboardContent'
import OrderContent from './components/OrderContent'
import CustomerContent from './store/containers/CustomerContent'
import * as reducers from './store/reducers'
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
                <Route path="/customer" render={() => { return (<Dashboard title="Customers" ><CustomerContent/></Dashboard>) }} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp())
renderApp()
