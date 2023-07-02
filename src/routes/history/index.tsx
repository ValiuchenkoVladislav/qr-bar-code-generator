import { RouteProps } from "react-router-dom";

import { HistoryPage } from "./layout/HistoryPage";


export const historyRoute: RouteProps = {
  path: "/history",
  element: <HistoryPage/>
};
