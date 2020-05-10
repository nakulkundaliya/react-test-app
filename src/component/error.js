import React from "react";
import './styles/styles.css'
const Error = (props) => {
  const { error } = props
  return (
    <h3 className="error">{error}</h3>
  );
}

export default Error;
