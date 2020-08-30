import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import Home from './components/index'
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import './App.css';

function App() {
  return (
    <>
       <CssBaseline>
         <Route exact path="/" component = {Home}/>
         <Route  path = "/resume" component={Resume}/>
         <Route path="/contacts" component={Contacts}/>
       </CssBaseline>
    </>
     
    
  );
}

export default App;
