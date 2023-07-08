import { Route } from "~/types/Route";

import { HistoryPage } from "./layout/HistoryPage";


export const historyRoute: Route = {
  path: "/history",
  element: <HistoryPage/>
};
