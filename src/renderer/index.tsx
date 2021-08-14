import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './dashboard/Dashboard'
import DashboardContent from './dashboard/DashboardContent'
import OrderContent from './dashboard/OrderContent'


ReactDOM.render(
    <Router>
        <Route path="/" component={Dashboard}/>
    </Router>,
    document.getElementById('root')
)
