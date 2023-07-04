import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";

import { homeRoute, historyRoute } from "~/routes";

import { appStore } from "~/store/appStore";

import { App } from "~/layout/App";


// BrowserRouter is troublesome when used in extensions
const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path={homeRoute.path} element={homeRoute.element}/>
      <Route path={historyRoute.path} element={historyRoute.element}/>
    </Route>
  )
);

// usually it's not recommended to inject react directly into
// body because of browser extensions but we don't care about it
// 'cause we're extension ourselves :D
createRoot(document.body).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>
);
