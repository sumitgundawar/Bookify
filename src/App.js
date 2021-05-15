import React,{useState} from 'react'
import Row from './Row';
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Bookinfo from './BookInfo';



function App() {

  
  return (
    <div className="app">
      
      <Router>
        <Switch>
        <Route exact path="/">
        <Row />
        </Route>
        <Route exact path="/info">
        <Bookinfo />
        </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
