import React from "react";
import TechNews from "./TechNews";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Business from "./BusinessNews";
import Health from "./HealthNews";
import Science from "./ScienceNews";
import Sports from "./SportsNews";
import Entertainment from "./EntertainmentNews";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/business" component={Business} />
            <Route path="/sports" component={Sports} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/health" component={Health} />
            <Route path="/science" component={Science} />
            <Route path="/technology" component={TechNews} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
