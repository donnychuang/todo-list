import { useState } from "react";
import { Todo } from "../types/todoList";

const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([
      ...todos,
      todo,
    ]);
  };

  const switchTodoDoneStatus = (id: number) => {
    const targetTodoIndex = todos.findIndex(
      (todo: Todo) => todo.id === id
    );

    const newTodos = [...todos];
    
    newTodos[targetTodoIndex] = {
      ...newTodos[targetTodoIndex],
      done: !newTodos[targetTodoIndex].done,
    };
    //newTodos[targetTodoIndex].done = !newTodos[targetTodoIndex].done;

    setTodos(newTodos);
  }

  const deleteTodos = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => (
      todo.id !== id
    ));

    setTodos(newTodos);
  }

  const [filterDoneTodo, setFilterDoneTodo] = useState<boolean>(false);

  const switchFilterDoneTodo = () => {
    setFilterDoneTodo(!filterDoneTodo);
  };

  let workTodos = todos;
  if (filterDoneTodo) {
    workTodos = todos.filter(todo => !todo.done);
  };

  return { 
    todos: workTodos,
    addTodo,
    switchTodoDoneStatus,
    deleteTodos,
    filterDoneTodo,
    switchFilterDoneTodo,
  } as const;
};

export default useTodoList;