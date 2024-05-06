import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
}

const store = configureStore({
    reducer: rootReducer,
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
