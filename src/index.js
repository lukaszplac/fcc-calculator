import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import style from './main.scss';
import sidebar from './sidebar';

sidebar($); //executing my sidebar plugin
ReactDOM.render(<App />, document.getElementById('app'));