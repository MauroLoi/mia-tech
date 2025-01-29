import { configureStore } from "@reduxjs/toolkit";
import manageTodosReducer from "./slice/manageTodos";

const store = configureStore({
    reducer: {
        todos: manageTodosReducer,
    },
});

export default store;
