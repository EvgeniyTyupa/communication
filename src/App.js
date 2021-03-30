import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';


const App = (props) => {
  return(
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" render={()=><Main/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
