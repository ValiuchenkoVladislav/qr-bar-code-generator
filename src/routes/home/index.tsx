import { Route } from "~/types/Route";

import { HomePage } from "./layout/HomePage";


export const homeRoute: Route = {
  path: "/",
  element: <HomePage/>
};
