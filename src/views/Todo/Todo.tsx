import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { rootState } from "../../store";
import { Todo as ITodo } from '../../types/todoList';
import { getTodoById } from "../../actions/todo";
import styles from './index.scss';

const Todo = () => {
  const navigate = useNavigate();
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoById(Number(id)));
  });

  const todo: ITodo = useSelector(
    (state: rootState) => state.todo
  );

  return (
    <div className={styles.layout}>
      <div className={styles.todo}>
        <span>ID: {todo.id}</span>
        <h1>{ todo.name }</h1>
        <p>
          完成狀況：
          <span style={{ color: todo.done ? '#21bf72' : '#eb8f8f'}}>
            {todo.done ? '已完成' : '未完成'}
          </span>
        </p>
        <button
          type="button"
          onClick={() => {navigate('/')}}
        >
          返回待辦事項列表
        </button>
      </div>
    </div>
  );
};

export default Todo;