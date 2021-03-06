import { Switch,Route,withRouter } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux';
import AuthPage from "../pages/AuthPage";
import TestPage from '../pages/TestPage';
import HomePage from '../pages/HomePage';
import PollPage from '../pages/PollPage';
import { getCurrentPoll } from '../store/actions';
import CreatePollPage from '../pages/CreatePollPage';

const RouteVeiws =({auth,getCurrentPoll})=> (<main>
    <Switch>
         <Route exact path='/' render={props=><HomePage {...props}/>}/>
         <Route exact path="/login" render={() => <AuthPage authType="login"  isAuthenticated={auth.isAuthenticated}/>}/>
         <Route exact path="/register" render={()=> <AuthPage authType="register"  isAuthenticated={auth.isAuthenticated}/>}/>
         <Route exact path="/poll/new" render={()=><CreatePollPage isAuthenticated={auth.isAuthenticated}/> }/>
         <Route exact path='/poll/:id' render={props => <PollPage getPoll={id =>getCurrentPoll(id)} {...props}/>} />
         <Route exact path="/test" render={()=><TestPage/>} /> 

    </Switch>
</main>);

export default withRouter(connect(store =>({auth:store.auth}),{getCurrentPoll})(RouteVeiws));