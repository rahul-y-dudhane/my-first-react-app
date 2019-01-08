import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Sidebar from './sidebar';
import App from './App';



ReactDOM.render(<App />, document.getElementById('root'));

     setTimeout( () =>{
        ReactDOM.render(<Sidebar />, document.getElementById('root'))
     },1500);


// ReactDOM.render(<MyTitle name="Welcome" />, document.getElementById('myTitle'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
