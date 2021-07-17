import "./style.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import routes from "./routes"; 
import Toast from './components/toast/Toast.jsx';

function App() {
  
  return ( 
      <div className="Main">
        <Router>
          <Switch>
            {
              routes.map((route, i) => (
                <Route path={route.href}
                  key={i}
                  exact={route.isExact || false}
                  component={route.component} />
              ))
            }
          </Switch>
        </Router>
        <Toast />
      </div> 
  );
}

export default App;
