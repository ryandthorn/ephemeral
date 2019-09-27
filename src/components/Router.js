import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/:listID" component={App} />
    </BrowserRouter>
  );
};

export default Router;
