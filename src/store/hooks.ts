import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { appStore, rootReducer } from "./appStore";


export const useAppSelector:
  TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;

export const useAppDispatch = useDispatch<typeof appStore["dispatch"]>;
