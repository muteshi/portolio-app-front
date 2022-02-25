import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../views/homepages/HomePageLight";

import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Loader from "../components/common/Loader";

const Article = React.lazy(() => import("../components/blog/Article"));

const DarkModeTheme = React.lazy(() =>
  import("../views/homepages/HomePageDark")
);

const ResumePreview = React.lazy(() =>
  import("../components/resume/ResumePreview")
);
const NotFound = React.lazy(() => import("../views/NotFound"));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollTopBehaviour />
      <Switch>
        <Route path="/posts/:postSlug" component={Article} />
        <Route path="/resume-preview" component={ResumePreview} />
        <Route path="/dark" component={DarkModeTheme} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
