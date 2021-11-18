import React from 'react';
import {withRouter} from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Auth from '../components/Auth';
import Polls from '../components/Polls';
import Poll from '../components/Poll';
import CreatePoll from '../components/CreatePoll';
const TestPage = props => (
    <div> 
        <h1>UI Test Page</h1>
        
        <h2>Testing Error Component: </h2>
      <ErrorMessage />
      <hr />

      <h2>Testing Auth Component: </h2>
      <Auth />
      <hr />

      <h2>Testing Create Poll Component: </h2>
      <CreatePoll />
      <hr />

      <h2>Testing Polls Component: </h2>
      <Polls {...props} />
      <hr />

      <h2>Testing Poll Component: </h2>
      <Poll />
      <hr />
    </div>
)
export default TestPage;