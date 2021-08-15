import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './components/Dashboard'
import DashboardContent from './components/DashboardContent'
import OrderContent from './components/OrderContent'
import CustomerContent from './store/containers/CustomerContent'
import AsyncContent from './store/containers/AsyncContent'
import * as reducers from './store/reducers'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { navListName } from './components/listItems'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers(reducers),
    // applyMiddleware(logger)
    applyMiddleware(thunk)
)


function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route exact path="/" render={() => { return (<Dashboard title={navListName.dashboard.name}><DashboardContent /></Dashboard>) }} />
                <Route path="/router" render={() => { return (<Dashboard title={navListName.route.name} ><OrderContent /></Dashboard>) }} />
                <Route path="/redux" render={() => { return (<Dashboard title={navListName.counter.name} ><CustomerContent/></Dashboard>) }} />
                <Route path="/async" render={() => { return (<Dashboard title={navListName.async.name} ><AsyncContent /></Dashboard>) }} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp())
renderApp()
