import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const history = useHistory();
  const [username, setUsername] = useState();

  const submitForm = () => {
    if (username) {
      history.push(`/${username}`)
    } else {
      alert('Please eneter username')
    }
  }
  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <input
          className="input"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={changeUsername} />
        <input
          className="submit"
          type="submit"
          value="Search" />
      </form>
    </div>
  );
}

export default Home;
