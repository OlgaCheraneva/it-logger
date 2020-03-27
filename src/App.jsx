import React, {Fragment, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import {AddBtn} from './components/layout/AddBtn';
import {SearchBar} from './components/layout/SearchBar';
import {AddLogModal} from './components/logs/AddLogModal';
import {AddTechModal} from './components/techs/AddTechModal';
import {EditLogModal} from './components/logs/EditLogModal';
import {TechListModal} from './components/techs/TechListModal';
import {Logs} from './components/logs/Logs';

import './App.css';

function App() {
    useEffect(() => {
        M.AutoInit();
    });
    return (
        <Fragment>
            <SearchBar />
            <div className="container">
                <AddBtn />
                <AddLogModal />
                <AddTechModal />
                <EditLogModal />
                <TechListModal />
                <Logs />
            </div>
        </Fragment>
    );
}

export default App;
