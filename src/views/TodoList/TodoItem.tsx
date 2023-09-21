import React from "react";
import { Todo } from '../../types/todoList';
import styles from './index.scss';
import { useNavigate } from "react-router-dom";

type TodoProps = {
  todo: Todo;
  switchTodoDoneStatus: (id: number) => void,
  deleteTodo: (id: number) => void,
};

const TodoItem = (props: TodoProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.todoItem}>
      <span
        style={{textDecoration: props.todo.done ? 'line-through' : 'none',}}
      >
        {props.todo.name}
      </span>
      <span>
        <input
          type="checkbox"
          checked={props.todo.done}
          onChange={() => { props.switchTodoDoneStatus(props.todo.id); }}
        />
        <button
          type="button"
          onClick={() => { props.deleteTodo(props.todo.id); }}
        >
          刪除
        </button>
        <button
          type="button"
          onClick={() => { navigate(`/todo/${props.todo.id}`); }}
        >
          詳細
        </button>
      </span>
    </div>
  )
};

export default TodoItem;