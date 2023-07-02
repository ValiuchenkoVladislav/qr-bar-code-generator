import { RouteProps } from "react-router-dom";

import { HomePage } from "./layout/HomePage";


export const homeRoute: RouteProps = {
  path: "/",
  element: <HomePage/>
};
