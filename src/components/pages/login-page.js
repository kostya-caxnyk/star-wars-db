import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (!isLoggedIn) {
    return (
      <div className="jumbotron">
        <p>Login to see secret page</p>
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="jumbotron">
      <p>Login to see secret page</p>
      <button className="btn btn-danger" onClick={onLogin}>
        UnLogin
      </button>
    </div>
  );
};

export default LoginPage;
