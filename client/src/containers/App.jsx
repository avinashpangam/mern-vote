import React,{ Fragment } from "react";

import {Provider} from 'react-redux';
// import api, { setToken } from "../services/api";
import {BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import decode from 'jwt-decode'
import {store} from "../store";
import { addError, setCurrentuser, setToken } from "../store/actions";
// import Auth from "../components/Auth";
// import ErrorMessage from "../components/ErrorMessage";
import RouteVeiws from "./RouteVeiws";
import NavBar from "./NavBar";
if(localStorage.jwtToken)
{
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentuser(decode(localStorage.jwtToken)))
    } catch (err) {
        store.dispatch(setCurrentuser({}));
        store.dispatch(addError(err));
    }
}
const App=() => ( 
<Provider store={store}>
    <Router>
     <Fragment>
      {/* <Auth authType={'login'}/>
    < ErrorMessage/> */}
    <NavBar/>
    <RouteVeiws/>
  
    </Fragment>
    </Router>
    </Provider>
);

// class App extends Component{
//   async componentDidMount(){
//      const result = api.call('post','auth/login',{
//           username :'username',
//           password:'password'
//       });
//       console.log(result);
//   }

//     render(){
//         return <div> App works</div>
// //     }
// }
export default App;
