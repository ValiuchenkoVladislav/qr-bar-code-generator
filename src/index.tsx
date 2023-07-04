import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";

import * as routes from "~/routes";

import { appStore } from "~/store/appStore";

import { App } from "~/layout/App";


// address bar is hidden so there's nothing about hash router
const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      {Object.values(routes).map(route =>
        <Route key={route.path} {...route}/>
      )}
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
