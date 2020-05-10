import React from "react";
import './styles/styles.css'
const Card = (props) => {
  const { repoName, onClick } = props
  return (
    <h3 className="card" onClick={onClick}>{repoName}</h3>
  );
}

export default Card;
