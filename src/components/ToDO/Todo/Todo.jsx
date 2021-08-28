import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineDelete } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";

function Todo({ todos, finalizaTodo, excluirTodo, alteraTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // nesse script controlamos os icones para fazer suas finalidades  alterar e excluir
  const submitUpdate = (value) => {
    alteraTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "tarefas complete" : "tarefas"}
      key={index}
    >
      <div key={todo.id} onClick={() => finalizaTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineDelete
          onClick={() => excluirTodo(todo.id)}
          className="excluir-icon"
        />
        <VscEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="editar-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
