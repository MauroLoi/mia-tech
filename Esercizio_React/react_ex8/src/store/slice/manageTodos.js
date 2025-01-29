import { createSlice } from "@reduxjs/toolkit";

const manageTodos = createSlice({
    name: "todos",
    initialState: [], 
    reducers: {
        setTodos: (state, action) => {
            return action.payload; 
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed; 
            }
        },
    },
});

export const { setTodos, toggleTodo } = manageTodos.actions;
export default manageTodos.reducer;

