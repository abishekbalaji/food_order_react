import { compose, applyMiddleware, createStore } from "redux";

import rootReducer from "./rootReducer";

const middlewares = [];

const enhancedCompose =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = enhancedCompose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
