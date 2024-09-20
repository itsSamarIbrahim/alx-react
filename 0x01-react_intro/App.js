import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils'; // Assuming these functions are available

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <hr className="custom-line-above" />
        <p className="p-login">Login to access the full dashboard</p>

        {/* Adding the email and password fields along with the labels */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* Adding the button */}
        <button type="button">OK</button>
      </div>
      <footer class="App-footer">
        <hr class="custom-line-bottom" />
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p> {/* Using the utility functions */}
      </footer>
    </div>
  );
}

export default App;
