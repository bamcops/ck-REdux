import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "../redux/Action";

const TaskToDo = ({ todo }) => {
  const dispatch = useDsisplay();
  return (
    <div>
      <h3>{todo.text}</h3>
      <button onClick={() => dispatch(done_todo(todo.id))}>
        {todo.done ? "Undone" : "done"}
      </button>
      <button onClick={() => dispatch(delete_todo(todo.id))}>Delete</button>
    </div>
  );
};

export default TaskTodo;
