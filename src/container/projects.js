import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../utils/api-services'
import '../App.css';
import Header from '../component/header';
import Loader from '../component/loader';
import Card from '../component/card';
import Error from '../component/error';

const api = API.apiServices()
const Projects = (props) => {
  const history = useHistory();
  const { name } = props.match.params
  const [repos, setRepos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState()
  useEffect(() => {
    const request = api.getRepo(name)
    request.then((res) => {
      setIsLoading(false)
      setRepos(res.data)
    }).catch(err => {
      setError(err.response.data.message || "Something wants wrong please try again")
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="App">
      <Header title={`${name}'s Repositories`} />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {repos && repos.length == 0 && <Error error={"No record found"} />}
      <div className="content">
        {repos && repos.map((item, key) => {
          return <Card key={key} repoName={item.name} onClick={() => history.push(`/${name}/${item.name}`)} />
        })}
      </div>

    </div>
  );
}

export default Projects;