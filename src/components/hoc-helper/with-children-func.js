import React from 'react'


export default  (fn) => (Wrapped) => {
    return (props) => {
      return <Wrapped {...props}>{fn}</Wrapped>;
    };
  };
  