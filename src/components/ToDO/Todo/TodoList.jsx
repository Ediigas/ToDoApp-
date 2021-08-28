import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
 
  const [todos, setTodos] = useState([]);

  //nesse script adicionamos as tarefas no todolist
  const addTodo = (todo) => {
    // usei esse script para formatação ex: a.        a = g.g
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  //Aqui é a parte aonde realizamos as alteracoês nas tarefas
  const alteraTodo = (todoId, newValue) => {
    // usei esse script para formatação ex: a.        a = g.g
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //Exclui os todos no app
  const excluirTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  //a parte aonde finalizamos o todo
  const finalizaTodo = (id) => {
    let alteraTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(alteraTodo);
  };

  return (
    <>
      <h1>Oque pretende realizar hoje?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        finalizaTodo={finalizaTodo}
        excluirTodo={excluirTodo}
        alteraTodo={alteraTodo}
      />
    </>
  );
}

export default TodoList;
