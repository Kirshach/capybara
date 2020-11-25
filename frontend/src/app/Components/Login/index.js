import './style.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorise } from '../../store/states/domainData/slices/auth/auth';
import { unsetOverlay } from '../../store/states/ui/slices/overlay/overlay';

function Login({ setLogin }) {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [goFetch, setgoFetch] = useState(false);

  useEffect(() => {
    if (goFetch && email) {
      fetch(`http://localhost:3001/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(authorise(data.name));
          dispatch(unsetOverlay());
        })
        .catch((err) => console.log(err, '<<>>'));
      setLogin(false);
    }
    clearInputs();
  }, [goFetch]);

  function userEmail(event) {
    setEmail(event.target.value);
  }
  function userPassword(event) {
    setPassword(event.target.value);
  }
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  function userSubmit(event) {
    event.preventDefault();
    setgoFetch(true);
  }

  return (
    <form onSubmit={userSubmit} className="formLogin" onClick={(e) => e.stopPropagation()}>
      <div className="form-group">
        <label>Email address</label>
        <input onChange={userEmail} type="email" value={email} className="form-control" />
        <small id="emailHelp" className="form-text text-muted">
          We&aposll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input onChange={userPassword} type="password" value={password} className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Login;
