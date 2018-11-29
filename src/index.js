import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import Planes from './containers/Planes';
import Images from './containers/Images';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Planes}></Route>
        <Route path='/images' component={Images}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));