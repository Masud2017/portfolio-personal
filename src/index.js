import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import './reponsive.scss';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();