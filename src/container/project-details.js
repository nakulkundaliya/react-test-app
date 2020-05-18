import React, { useEffect, useState } from 'react';
import {  withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import API from '../utils/api-services'
import '../App.css';
import Header from '../component/header';
import Loader from '../component/loader';
import Error from '../component/error';
const api = API.apiServices()
const ProjectDetails = (props) => {
  const { name, projectid } = props.match.params
  const [readMe, setReadMe] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const request = api.getRepoReadMe(name, projectid)
    request.then((res) => {
      setIsLoading(false)
      setReadMe(res.data)
    }).catch(err => {
      setError(err.response.data.message || "Something wants wrong please try again")
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="App">
      <Header title={`${projectid}'s README`} />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      <ReactMarkdown source={readMe} />
    </div>
  );
}

export default withRouter(ProjectDetails);