import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import store from './shared/store';

import './index.css';

const Root = () =>
    <Provider store={ store }>
        <App />
    </Provider>

ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);

serviceWorker.unregister();
