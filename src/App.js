import React from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Contador from './containers/ContadorContainer';
import SumarButton from './containers/SumarButtonContainer';
import RestarButton from './containers/RestarButtonContainer';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

let storeGlobal = createStore(reducer, {contador : 10});

const Home = () => (
  <h1>La página de Home</h1>
)

const ContadorPage = () => (
  <div className="App">
    <Contador />
    <div>
      <SumarButton />
      <RestarButton />
    </div>
  </div>
)

const Contact = () => (
  <form>
    <input className="form-control" type="text" placeholder="Name"></input>
    <input className="form-control mt-3" type="email" placeholder="Email"></input>
    <button className="btn btn-success mt-3">Join</button>
  </form> 
)

function App() {
  return (
    <BrowserRouter>
      <Provider store={storeGlobal} >
        <nav className="navbar navbar-expand bg-dark">
          <ul className="navbar-nav nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contador">Contador</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <main className="container mt-4">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contador" component={ContadorPage} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
        </main>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
