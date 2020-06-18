import React from 'react';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Battery from '../Battery'

function App() {
  return (
    
    <div className="App">
      <header className="App-header">

      <AppBar position="fixed">
        <Toolbar color='primary'>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon color='secondary'/>
    </IconButton>
    <Typography variant="h6">
      {/* add link tag to ous uwrt */}
      robo_thoughts
    </Typography>
 
        </Toolbar>
      </AppBar>
      <Toolbar />  

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Battery charge={68}/>
        <Battery charge={1}/>
        <Battery charge={100}/>
        <Battery charge={null}/>
      </header>
    </div>
  )
}

export default App;
