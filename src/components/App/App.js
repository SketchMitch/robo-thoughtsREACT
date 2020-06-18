import React from 'react';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">

      <AppBar position="fixed">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      robo_thoughts
    </Typography>
 
        </Toolbar>
      </AppBar>
      <Toolbar />  

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
