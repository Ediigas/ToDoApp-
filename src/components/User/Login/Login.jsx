import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import StoreContext from "../../Store/Context";
import UIButton from "../../UI/Button/Button";

import "./Login.css";

function initialState() {
  return { user: '', password: '' };
}

function login({user, password}) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234'};
  }
  return {error: 'Usuário ou senha invalído'};
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  } 

  function onSubmit(event) {
    event.preventDefault();

    const {token} = login(values);

     if(token) {
      setToken(token);
      return history.push('/');
     }

     setValues(initialState);

  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acess To Do</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <input
            placeholder="User"
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <input
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            values={values.password}
          />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
