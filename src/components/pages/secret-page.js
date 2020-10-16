import React from 'react';

import { Redirect } from 'react-router-dom';

import img from './images.jpg'

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div className="jumbotron text-center"><img src={img} alt="hello"></img></div>;
  }

  return <Redirect to="/login" />;
};

export default SecretPage;
