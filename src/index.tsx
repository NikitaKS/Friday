import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from './redux/store'
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <MainComponent/>
    </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
