import React, { useState } from 'react';
import Login from '../../../Login';
import { useSelector } from 'react-redux';
import Registration from '../../../Registration';
import './SetiingsForm.css';

const SettingsForm = () => {
  const user = useSelector((state) => state.domainData.authorisation.username);
  console.log(user, 'userFromStore');
  const [showNavigation, setNavigation] = useState(true);
  const [login, setLogin] = useState(false);
  const [registration, setRegistration] = useState(false);

  const goFetch = () => (window.location.href = 'http://localhost:3001/auth/google');
  const logOut = () => (window.location.href = 'http://localhost:3001/auth/logout');

  function showComponent(e) {
    e.stopPropagation();
    setNavigation(false);
    switch (e.target.innerText) {
      case 'registration':
        return setRegistration(true);
      case 'login':
        return setLogin(true);
      case 'googleLogin':
        return goFetch();
      case 'logout':
        return logOut();
    }
  }

  return (
    <>
      {showNavigation ? (
        <div className="SetiingsForm" onClick={showComponent}>
          {!user ? (
            <>
              <h1>{user || ''}</h1>
              <h1>login</h1>
              <h1>registration</h1>
              <h1>googleLogin</h1>
            </>
          ) : (
            <>
              <h1>{user || ''}</h1>
              <h1>logout</h1>
            </>
          )}
        </div>
      ) : (
        ''
      )}

      {login ? <Login setLogin={setLogin} /> : ''}
      {registration ? <Registration /> : ''}
    </>
  );
};

export default SettingsForm;
