// @ts-ignore
import React, { useState } from "react";
// @ts-ignore
import { BrowserRouter as Router, Route } from "react-router-dom";

// @ts-ignore
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
