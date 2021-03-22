/* eslint-disable react/jsx-no-undef */

import './App.css';

import MyTable from './MyTable';
import Myform from './Myform'
import Mynavbar from './Mynavbar';
 import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">

      <Mynavbar/> 
      <div className="App-header">
        <Myform/>
 
 <MyTable/>

 </div>
    </div>
  );
}
export default App;
