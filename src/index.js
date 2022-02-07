import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import store from './reduxState/store'

reactDom.render(<BrowserRouter>
    <Provider store={store}>
        <App></App>
    </Provider>
</BrowserRouter>, document.getElementById('root'))