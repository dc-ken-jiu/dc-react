import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { Provider } from 'react-redux';
import store from '@/reducer'
import '@/style/common.less'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
    document.getElementById('app')
  );


