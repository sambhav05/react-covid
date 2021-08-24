import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar"
import India from "./components/india"
import Home from "./components/home"
import Countries from "./components/countries"
import Prevent from "./components/prevent"

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={Home} />
    <Route path="/countries/data" component={Countries} />
    <Route path="/india/state" component={India} />
    <Route path="/how-to-prevent" component={Prevent} />
    </div>
  </Router>
  )
}




export default App;
