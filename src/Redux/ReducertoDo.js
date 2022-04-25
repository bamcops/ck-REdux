import { ADD, DELETE_TODO, DONE, EDIT } from "./actionType";

const initialSate = {
  Task: [
    { Text: "Lear Redux", id: Math.random(), done: false },
    { Text: "Lear React", id: Math.random(), done: false },
    { Text: "Learn HTML", id: Math.random(), done: false },
  ],
};
export const Reducer_todo = (state = initialSate, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD:
      return { ...state, Task: [...state.Task, payload] };

    case DELETE_TODO:
      return { ...state, Task: state.Task.filter((el) => el.id !== payload) };

    case Done:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id == payload ? { ...el, done: !el.done } : el
        ),
      };

    case EDIT:
      return { ...state, state: state.Task.map((el) => el.id == payload.id) };

    default:
      return state;
  }
};
