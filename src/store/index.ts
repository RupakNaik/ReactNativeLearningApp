// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// const store = createStore(rootReducer);
// export default store;

/**
 * Allow us to build store,This is the modern, recommended way to create a Redux store
 * It automatically sets up Redux DevTools, adds middleware (like redux-thunk), and enables helpful development checks
 */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

/**
 * Creates and exports the Redux store
 * The reducer property receives your rootReducer, which handles all state updates
 */
export const store = configureStore({
    reducer: rootReducer
});

/**
 * Creates a TypeScript type representing your entire Redux state shape
 * store.getState is a function that returns the current state
 * typeof store.getState gets the function's type signature
 * ReturnType<...> extracts what that function returns (your state object)
 * You use RootState when you need to type useSelector hooks
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Creates a TypeScript type for your store's dispatch function
 * This is important because Redux Toolkit's dispatch can handle thunks (async actions), not just plain actions
 * You use AppDispatch when typing custom hooks or dispatching thunk
 */
export type AppDispatch = typeof store.dispatch;

// rootReducer (combines all slices)
//        ↓
// configureStore({ reducer: rootReducer })
//        ↓
//     store (holds state, dispatch, subscribe)
//        ↓
// RootState & AppDispatch (TypeScript types for type-safe usage)