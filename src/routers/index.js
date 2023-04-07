import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../screen/landingPage";
import Portfolio from "../screen/portfolio";

const Router = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
];

function MainRoutes() {
  return (
    <Routes>
      {Router.map((route) => (
        <Route path={route.path} element={route.element}></Route>
      ))}
    </Routes>
  );
}

export default MainRoutes;
