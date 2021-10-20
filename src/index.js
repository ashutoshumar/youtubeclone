import ReactDOM from 'react-dom';
import React from "react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import "./_base.scss"
import {Provider} from "react-redux";
import store from './redux/Store';
import { BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
    <Provider store={store}>
        <Router>
    <App/>
    </Router>
    </Provider>
    , document.getElementById('root')
)