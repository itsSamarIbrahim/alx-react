import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "../App/App.css";
import "../Header/Header"
import "../Login/Login"
import "../Footer/Footer"
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <React.Fragment>
    <Notification />
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
      <Login />
      {/* Footer */}
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
