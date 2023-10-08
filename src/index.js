import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import "./assets/css/reset.css"
import "./index.less"
//连接reducx(store)跟component
import { Provider } from 'react-redux'
import store from './store/index'
import { setCityAction } from './store/action/actions';

if(localStorage.getItem('city')){
  store.dispatch(setCityAction(localStorage.getItem('city')))
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>   
  </React.StrictMode>
);