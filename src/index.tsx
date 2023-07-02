import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";

import { homeRoute } from "./routes/home";
import { historyRoute } from "./routes/history";

import { App } from "./layout/App";


// address bar is hidden so there's nothing about hash router
const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route {...homeRoute}/>
      <Route {...historyRoute}/>
    </Route>
  )
);

// usually it's not recommended to inject react directly into
// body because of browser extensions but we don't care about it
// 'cause we're extension ourselves :D
createRoot(document.body).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>
);
