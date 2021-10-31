import React,{Component} from "react";

import {Provider} from 'react-redux';
import api from "../services/api";
import {store} from "../store";
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
