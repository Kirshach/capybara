import './style.css';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {ragistration} from '../../redux/actionCreators/user';

function Registration() {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function userName(event) {
    setName(event.target.value);
  }
  function userEmail(event) {
    setEmail(event.target.value);
  }
  function userPassword(event) {
    setPassword(event.target.value);
  }
  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  async function userSubmit(event) {
    event.preventDefault();
    const res = await fetch('http://localhost:3001/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.status === 200) {
      console.log(res.status, 'From http://localhost:3001/auth/registration');
    }

    clearInputs();
  }

  return (
    <form onSubmit={userSubmit} className="formReg" onClick={(e) => e.stopPropagation()}>
      <div className="form-group">
        <label>Username</label>
        <input onChange={userName} type="text" className="form-control" aria-describedby="emailHelp" value={name} />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input onChange={userEmail} type="email" className="form-control" aria-describedby="emailHelp" value={email} />
        <small className="form-text text-muted">We&aposll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input onChange={userPassword} value={password} type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Registration;
