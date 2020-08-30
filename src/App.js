import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Customers from "./components/pages/Customers";
import CustomerState from "./context/customer/CustomerState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alerts/AlertState";
import CustomerDetail from "./components/pages/CustomerDetail";

function App() {
  return (
    <AuthState>
      <AlertState>
        <CustomerState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/products" component={Products} />

                  <Route exact path="/register" component={Register} />

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
      </AlertState>
    </AuthState>
  );
}

export default App;
