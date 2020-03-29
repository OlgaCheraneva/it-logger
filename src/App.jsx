import React, {Fragment, useEffect} from 'react';
import {Provider} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import {AddBtn} from './components/layout/AddBtn';
import {SearchBar} from './components/layout/SearchBar';
import {AddLogModal} from './components/logs/AddLogModal';
import {AddTechModal} from './components/techs/AddTechModal';
import {EditLogModal} from './components/logs/EditLogModal';
import {TechListModal} from './components/techs/TechListModal';
import Logs from './components/logs/Logs';
import store from './store';

import './App.css';

function App() {
    useEffect(() => {
        M.AutoInit();
    });
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
