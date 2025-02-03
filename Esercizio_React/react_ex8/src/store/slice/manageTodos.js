import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error("Errore nel recupero dei to-do");
    }
    return response.json();
});

const manageTodos = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: false,
        error: null,
    },
    reducers: {
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export const { toggleTodo } = manageTodos.actions;
export default manageTodos.reducer;


