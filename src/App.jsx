import React, {Fragment, useEffect} from 'react';

import {SearchBar} from './components/layout/SearchBar';
import {Logs} from './components/logs/Logs';

import M from 'materialize-css/dist/js/materialize.min.js';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
    useEffect(() => {
        M.AutoInit();
    });
    return (
        <Fragment>
            <SearchBar />
            <div className="container">
                <Logs />
            </div>
        </Fragment>
    );
}

export default App;
