import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import './style/index.less';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

ReactDOM.render(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>,
    document.querySelector('#app')
)

module.hot.accept();
