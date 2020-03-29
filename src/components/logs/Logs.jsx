import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {LogItem} from './LogItem';
import {Preloader} from '../layout/Preloader';
import {getLogs} from '../../actions/logActions';

const Logs = ({logState: {logs, loading}, getLogs}) => {
    useEffect(() => {
        getLogs();
    }, []);

    if (loading || logs === null) {
        return <Preloader />;
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className="center">No logs to show...</p>
            ) : (
                logs.map((log) => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    );
};

Logs.propTypes = {
    logState: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({logState: state.log});

export default connect(mapStateToProps, {getLogs})(Logs);
