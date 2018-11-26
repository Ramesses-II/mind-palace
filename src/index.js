import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App      from './App';
import Images  from './Images'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/'   component={App}></Route>
      <Route path='/images'   component={Images}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));