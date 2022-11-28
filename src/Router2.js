import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Help from "./Help";
import Pricing from "./Pricing";

const Router2 = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </div>
  );
};
export default Router2;
