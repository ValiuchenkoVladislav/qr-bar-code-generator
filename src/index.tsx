import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { App } from "./layout/App";


// usually it's not recommended to inject react directly into
// body because of browser extensions but we don't care about it
// 'cause we're extension ourselves :D
createRoot(document.body).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
