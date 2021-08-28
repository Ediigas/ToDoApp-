import React, { useEffect, useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //Esse script funciona quando apertamos o botão add ou alterar ele insere a tafera no todolist
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  //Aqui esta localizado os botoes add e alterar
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Alterar tarefa"
            value={input}
            name="text"
            className="todo-input alterar"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button alterar">Alterar</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Adicionar tarefa"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Adicionar</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
