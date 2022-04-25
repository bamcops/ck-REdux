import { createStore } from "redux";
import { Reducer_todo } from "./ReducertoDo";

export const store = createStore(
   Reducer_todo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
