import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Loader from "../components/common/Loader";

const Article = React.lazy(() => import("../components/blog/Article"));

const HomePage = React.lazy(() =>
  import("../views/all-home-version/HomeLightAnimation")
);

const DarkModeTheme = React.lazy(() =>
  import("../views/all-home-version/HomeDarkAnimation")
);

const ResumePreview = React.lazy(() =>
  import("../components/resume/ResumePreview")
);
const NotFound = React.lazy(() => import("../views/NotFound"));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router basename="/">
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/blog/:postSlug" component={Article} />
          <Route path="/resume-preview" component={ResumePreview} />
          <Route path="/dark" component={DarkModeTheme} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
