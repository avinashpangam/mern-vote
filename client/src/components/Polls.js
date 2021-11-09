import React from "react";
import { Component } from "react";
import {connect} from 'react-redux'

import {connect} from 'react-redux';
import {getPolls,getUserPolls} from '../store/actions';
class Polls extends Component{
    constructor(props){
        super(props); 
    }

    componentDidMount(){
        
        
        const {getPolls}=this.props;
        getPolls();
    }
    render(){
        return <div></div>
    }
}

export default connect(store =>({
 auth:store.auth,
 polls:store.polls
}),{getPolls,getUserPolls})(Polls);