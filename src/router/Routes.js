import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Article from "../components/blog/Article";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import ResumePreview from "../components/resume/ResumePreview";

const Routes = () => {
  return (
    <Router basename="/">
      <ScrollTopBehaviour />
      <Switch>
        <Route path="/blog/:postSlug" component={Article} />
        <Route path="/resume-preview" component={ResumePreview} />
        <Route path="/dark" component={HomeDarkAnimation} />
        <Route exact path="/" component={HomeLightAnimation} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
