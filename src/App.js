import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutView from "./components/AboutView";
import {Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Navbar/>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/about" component={AboutView}/>
      </Switch>
    </div>
  );
}

export default App;
