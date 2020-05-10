import React from "react";
import './styles/styles.css'
const Header = (props) => {
  const { title } = props
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
