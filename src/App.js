import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Customers from "./components/pages/Customers";
import CustomerState from "./context/customer/CustomerState";
import CustomerDetail from "./components/pages/CustomerDetail";

function App() {
  return (
    <CustomerState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/customers" component={Customers} />
              <Route
                exact
                path="/customer/:userName"
                component={CustomerDetail}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </CustomerState>
  );
}

export default App;
