import React,{Component} from "react";

import api from "../services/api";
// const App=()=> <div>App Works</div>;

class App extends Component{
  async componentDidMount(){
     const result = api.call('post','auth/login',{
          username :'username',
          password:'password'
      });
      console.log(result);
  }

    render(){
        return <div> App works</div>
    }
}
export default App;
