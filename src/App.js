import React, { Fragment, useEffect } from 'react'
import './App.css'
import Map from './components/Map'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeObject from './util/theme'

const theme = createMuiTheme({
  ...themeObject
})

function App () {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/map'>
            <Map />
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
