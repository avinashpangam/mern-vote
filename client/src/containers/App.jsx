import React,{Component} from "react";

import {Provider} from 'react-redux';
// import api, { setToken } from "../services/api";
import decode from 'jwt-decode'
import {store} from "../store";
import { addError, setCurrentuser, setToken } from "../store/actions";

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
    <div>App Works</div>
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
