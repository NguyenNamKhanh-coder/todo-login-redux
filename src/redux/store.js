import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const loadState = () => {
  try {
    const state = localStorage.getItem("todos");
    return state ? JSON.parse(state) : { todos: [] };
  } catch {
    return { todos: [] };
  }
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: {
    todo: loadState(),
  },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todo));
});

export default store;
