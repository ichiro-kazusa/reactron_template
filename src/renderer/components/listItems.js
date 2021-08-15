import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'


export const navListName = { // name label for navigation drawer
  dashboard: {
    name: 'Dashboard'
  },
  route: {
    name: 'Router'
  },
  counter: {
    name: 'Redux'
  },
  async: {
    name: 'Async'
  }
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  navlink: {
    color: 'black',
    textDecoration: 'none', // remove link underline
  },
  navlinkactive: {
    color: 'rgb(63, 81, 181)',
    backgroundColor: 'rgba(63, 81, 181, 0.08)',
    borderRightStyle: 'solid',
    borderRightWidth: 4,
    borderRightColor: 'rgb(63, 81, 181)',
  },
}));


export function MainListItems() {
  const classes = useStyles()

  return (
    <div>
      <ListItem button component={NavLink} exact to="/" activeClassName={classes.navlinkactive} className={classes.navlink}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={navListName.dashboard.name} />
      </ListItem>
      <ListItem button component={NavLink} to="/router" activeClassName={classes.navlinkactive} className={classes.navlink} >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary={navListName.route.name} />
      </ListItem>
      <ListItem button component={NavLink} to="/redux" activeClassName={classes.navlinkactive} className={classes.navlink} >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={navListName.counter.name} />
      </ListItem>
      <ListItem button component={NavLink} to="/async" activeClassName={classes.navlinkactive} className={classes.navlink} >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={navListName.async.name} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
  )
}

export function SecondaryListItems() {
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </div>
  )
}