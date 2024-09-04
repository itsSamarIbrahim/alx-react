import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils'; // Import the functions from utils.js

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <img src={holbertonLogo} class="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body class="App-body">
        <hr class="custom-line-above" />
        <p class="p-login">Login to access the full dashboard</p>
      </body>
      <footer class="App-footer">
        <hr class="custom-line-bottom" />
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p> {/* Use the functions here */}
      </footer>
    </div>
  );
}

export default App;
